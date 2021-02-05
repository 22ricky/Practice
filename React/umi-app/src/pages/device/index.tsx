import React, { Fragment, useState } from 'react';
import { request } from 'umi';
import { useAntdTable } from 'ahooks';
import { PaginatedParams } from 'ahooks/lib/useAntdTable';
import { Layout, Modal, Form, Row, Col, Select, Input, Switch, Button, PageHeader, Card, Table, Space, Divider, Popconfirm, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

interface Item {
  index?: number,
  DeviceID: string,
  DeviceName: string,
  DeviceType: string,
  Address: string,
  Lon: string,
  Lat: string,
  Status: any,
  OPType?: string
}

export default () => {
  const [visible, setVisible] = useState(false);
  const [values, setValues]: any = useState({ Status: true, OPType: 'Create' });
  const [modalForm] = Form.useForm();
  const [searchForm] = Form.useForm();
  const { search: { submit, reset }, refresh, tableProps, pagination: { current, pageSize } } = useAntdTable(getList, { form: searchForm });

  const columns = [{
    title: '序号',
    dataIndex: 'index',
    render(text: number) {
      return (current - 1) * pageSize + text
    }
  }, {
    title: '设备ID',
    dataIndex: 'DeviceID',
  }, {
    title: '设备名称',
    dataIndex: 'DeviceName',
  }, {
    title: '设备类型',
    dataIndex: 'DeviceType',
  }, {
    title: '设备地址',
    dataIndex: 'Address',
  }, {
    title: '经度',
    dataIndex: 'Lon',
  }, {
    title: '纬度',
    dataIndex: 'Lat',
  }, {
    title: '操作',
    dataIndex: 'action',
    render(text: string, record: Item) {
      record = Object.assign({}, record, { Status: record.Status === 0, OPType: 'Edit' })
      return (
        <Fragment>
          <a onClick={() => { setVisible(true); modalForm.setFieldsValue(record); }}>编辑</a>
          <Divider type="vertical" />
          <Popconfirm title="确定删除当前设备吗？" onConfirm={() => deleteItem(record)}>
            <a>删除</a>
          </Popconfirm>
        </Fragment>
      );
    }
  }];

  async function getList ({ current: pageIndex, pageSize }: PaginatedParams[0], data: Object) {
    let { Data, RowCount } = await request('Device/GetDeviceList', {
      method: 'POST',
      data: Object.assign(data, { pageIndex, pageSize })
    })
    Data = JSON.parse(Data).map((item: Item, index: number) => {
      item.index = index + 1;
      return item;
    })
    return {
      list: Data,
      total: RowCount
    }
  }

  async function setItem(data: Item) {
    data.Status = data.Status ? '0' : '-1'
    try {
      await request('Device/AddDevice', {
        method: 'POST',
        data
      })
      await refresh()
      modalForm.resetFields()
      setVisible(false)
      message.success(`${data.OPType === 'Edit' ? '编辑' : '新建'}设备成功`)
    } catch (error) {}
  }

  async function deleteItem({ DeviceID }: Item) {
    try {
      await request('Device/DelDevice', {
        method: 'POST',
        data: { DeviceID }
      })
      await refresh()
      message.success('删除设备成功')
    } catch (error) {}
  }

  return (
    <Fragment>
      <Modal
        centered
        forceRender
        width={800}
        visible={visible}
        title={`${modalForm.getFieldValue('AreaId') ? '编辑' : '新建'}设备`}
        onCancel={() => { setVisible(false); modalForm.resetFields(); }}
        onOk={modalForm.submit}>
        <Form form={modalForm} initialValues={values} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} onFinish={values => setItem(values)}>
          <Row>
            <Col span={12}>
              <Form.Item label="设备ID" name="DeviceID" rules={[{ required: true, message: '请输入设备ID!' }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="设备名称" name="DeviceName" rules={[{ required: true, message: '请输入设备名称!' }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="设备类型" name="DeviceType" rules={[{ required: true, message: '请选择设备类型!' }]}>
                <Select>
                  <Select.Option value="监控">监控</Select.Option>
                  <Select.Option value="燃气泄露报警器">燃气泄露报警器</Select.Option>
                  <Select.Option value="明火探测器">明火探测器</Select.Option>
                  <Select.Option value="智慧用电">智慧用电</Select.Option>
                  <Select.Option value="烟感报警器">烟感报警器</Select.Option>
                  <Select.Option value="压力监测">压力监测</Select.Option>
                  <Select.Option value="水位监测">水位监测</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="设备地址" name="Address" rules={[{ required: true, message: '请输入设备地址!' }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="定位坐标Lon" name="Lon" rules={[{ required: true, message: '请输入经度!' }]}>
                <Input placeholder="经度" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="定位坐标Lat" name="Lat" rules={[{ required: true, message: '请输入纬度!' }]}>
                <Input placeholder="纬度" />
              </Form.Item>
            </Col>
            <Col hidden span={12}>
              <Form.Item required label="状态" name="Status" valuePropName="checked">
                <Switch />
              </Form.Item>
            </Col>
            <Col hidden span={12}>
              <Form.Item name="OPType">
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
      <Layout className="inner-content">
        <PageHeader ghost={false} title="设备信息管理" />
        <Layout.Content>
          <Form form={searchForm} labelCol={{ span: 8 }}>
            <Row>
              <Col span={6}>
                <Form.Item initialValue="" name="DeviceType" label="设备类型">
                  <Select placeholder="设备类型">
                    <Select.Option value="">全部</Select.Option>
                    <Select.Option value="监控">监控</Select.Option>
                    <Select.Option value="燃气泄露报警器">燃气泄露报警器</Select.Option>
                    <Select.Option value="明火探测器">明火探测器</Select.Option>
                    <Select.Option value="智慧用电">智慧用电</Select.Option>
                    <Select.Option value="烟感报警器">烟感报警器</Select.Option>
                    <Select.Option value="压力监测">压力监测</Select.Option>
                    <Select.Option value="水位监测">水位监测</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item name="DeviceName" label="设备名称">
                  <Input placeholder="设备名称" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Row justify="end">
                  <Form.Item>
                    <Space>
                      <Button type="primary" onClick={submit}>查询</Button>
                      <Button onClick={reset}>重置</Button>
                    </Space>
                  </Form.Item>
                </Row>
              </Col>
            </Row>
          </Form>
          <Card>
            <Row justify="space-between" align="middle">
              <Col>数据列表</Col>
              <Button type="primary" icon={<PlusOutlined />} onClick={() => setVisible(true)}>新建</Button>
            </Row>
            <Table size="middle" columns={columns} rowKey="index" {...tableProps} />
          </Card>
        </Layout.Content>
      </Layout>
    </Fragment>
  );
};
