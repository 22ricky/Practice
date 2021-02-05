import React, { Fragment, useState } from 'react';
import { request } from 'umi';
import { useAntdTable } from 'ahooks';
import { Layout, Modal, Form, Row, Col, Input, Select, Button, PageHeader, Card, Table, Space, Divider, Popconfirm, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

interface Item {
  index?: number,
  id: string,
  Name: string,
  Police: string,
  ChargePerson: string,
  PersonTel: string,
  GridTel: string,
  Territory: string,
  NoticeNum: string,
  ChargePolice: string,
  Tel: string,
  Lon: string,
  Lat: string
}

export default () => {
  const [visible, setVisible] = useState(false);
  const [values, setValues]: any = useState({});
  const [modalForm] = Form.useForm();
  const [searchForm] = Form.useForm();
  const { search: { submit, reset }, refresh, tableProps } = useAntdTable(getList, { form: searchForm });

  const columns = [{
    title: '序号',
    dataIndex: 'index',
  }, {
    title: '网格员姓名',
    dataIndex: 'Name',
  }, {
    title: '所属派出所',
    dataIndex: 'Police',
  }, {
    title: '分管负责人',
    dataIndex: 'ChargePerson',
  }, {
    title: '个人联系电话',
    dataIndex: 'PersonTel',
  }, {
    title: '网格联系电话',
    dataIndex: 'GridTel',
  }, {
    title: '负责社区',
    dataIndex: 'Territory',
  }, {
    title: '操作',
    dataIndex: 'action',
    render(text: string, record: Item) {
      return (
        <Fragment>
          <a onClick={() => { setVisible(true); modalForm.setFieldsValue(record); }}>编辑</a>
          <Divider type="vertical" />
          <Popconfirm title="确定删除当前网格员吗？" onConfirm={() => deleteItem(record)}>
            <a>删除</a>
          </Popconfirm>
        </Fragment>
      );
    }
  }];

  async function getList ({}, data: Object) {
    let { Data } = await request('Grid/GetGridList', {
      method: 'POST',
      data
    })
    Data = JSON.parse(Data).map((item: Item, index: number) => {
      item.index = index + 1;
      return item;
    })
    return {
      list: Data,
      total: Data.length
    }
  }

  async function setItem({ id: GNum, Name: GName, Police, ChargePerson, PersonTel, GridTel, Territory, NoticeNum, ChargePolice, Tel, Lon, Lat }: Item) {
    try {
      await request('Grid/AddGrid', {
        method: 'POST',
        data: { GNum, GName, Police, ChargePerson, PersonTel, GridTel, Territory, ChargePolice, NoticeNum, Tel, Lon, Lat }
      })
      await refresh()
      modalForm.resetFields()
      setVisible(false)
      message.success(`${GNum ? '编辑' : '新建'}网格员成功`)
    } catch (error) {}
  }

  async function deleteItem({ id: GNum }: Item) {
    try {
      await request('Grid/DelGrid', {
        method: 'POST',
        data: { GNum }
      })
      await refresh()
      message.success('删除网格员成功')
    } catch (error) {}
  }

  return (
    <Fragment>
      <Modal
        centered
        forceRender
        width={800}
        visible={visible}
        title={`${modalForm.getFieldValue('id') ? '编辑' : '新建'}网格员`}
        onCancel={() => { setVisible(false); modalForm.resetFields(); }}
        onOk={modalForm.submit}>
        <Form form={modalForm} initialValues={values} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} onFinish={values => setItem(values)}>
          <Form.Item hidden name="id">
            <Input />
          </Form.Item>
          <Row>
            <Col span={12}>
              <Form.Item label="网格员姓名" name="Name" rules={[{ required: true, message: '请输入网格员姓名!' }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="所属派出所" name="Police">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="分管负责人" name="ChargePerson">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="个人联系电话" name="PersonTel">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="网格联系电话" name="GridTel">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="负责社区" name="Territory">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="通知书/检查单" name="NoticeNum">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="所属社区民警" name="ChargePolice">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="民警联系方式" name="Tel">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="定位坐标Lon" name="Lon">
                <Input placeholder="经度" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="定位坐标Lat" name="Lat">
                <Input placeholder="纬度" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
      <Layout className="inner-content">
        <PageHeader ghost={false} title="网格员信息管理" />
        <Layout.Content>
          <Form form={searchForm} labelCol={{ span: 8 }}>
            <Row>
              <Col span={6}>
                <Form.Item name="GName" label="网格员名称">
                  <Input placeholder="网格员名称" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item name="Policestation" label="所属派出所">
                  <Input placeholder="所属派出所" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item name="Community" label="负责社区">
                  <Input placeholder="负责社区" />
                </Form.Item>
              </Col>
              <Col span={6}>
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
