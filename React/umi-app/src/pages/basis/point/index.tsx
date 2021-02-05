import React, { Fragment, useState } from 'react';
import { request } from 'umi';
import { useAntdTable } from 'ahooks';
import { Layout, Modal, Form, Row, Col, Input, Switch, Button, PageHeader, Card, Table, Space, Divider, Popconfirm, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

interface Item {
  index?: number,
  PlaceId: string,
  PlaceName: string,
  Status: any
}

export default () => {
  const [visible, setVisible] = useState(false);
  const [values, setValues]: any = useState({ Status: true });
  const [modalForm] = Form.useForm();
  const [searchForm] = Form.useForm();
  const { search: { submit, reset }, refresh, tableProps } = useAntdTable(getList, { form: searchForm });

  async function getList ({}, data: Object) {
    let { Data } = await request('Bas/GetPointList', {
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

  async function setItem({ PlaceId: PNum, PlaceName: PName, Status }: Item) {
    Status = Status ? '0' : '-1'
    try {
      await request('Bas/AddPoint', {
        method: 'POST',
        data: { PNum, PName, Status }
      })
      await refresh()
      modalForm.resetFields()
      setVisible(false)
      message.success(`${PNum ? '编辑' : '新建'}点位成功`)
    } catch (error) {}
  }

  async function deleteItem({ PlaceId: PNum }: Item) {
    try {
      await request('Bas/DelPoint', {
        method: 'POST',
        data: { PNum }
      })
      await refresh()
      message.success('删除点位成功')
    } catch (error) {}
  }

  const columns = [{
    title: '序号',
    dataIndex: 'index',
  }, {
    title: '点位名称',
    dataIndex: 'PlaceName',
  }, {
    title: '操作',
    dataIndex: 'action',
    render(text: string, record: Item) {
      record = Object.assign({}, record, { Status: record.Status === 0 })
      return (
        <Fragment>
          <a onClick={() => { setVisible(true); modalForm.setFieldsValue(record); }}>编辑</a>
          <Divider type="vertical" />
          <Popconfirm title="确定删除当前点位吗？" onConfirm={() => deleteItem(record)}>
            <a>删除</a>
          </Popconfirm>
        </Fragment>
      );
    }
  }];

  return (
    <Fragment>
      <Modal
        centered
        forceRender
        visible={visible}
        title={`${modalForm.getFieldValue('PlaceId') ? '编辑' : '新建'}点位`}
        onCancel={() => { setVisible(false); modalForm.resetFields(); }}
        onOk={modalForm.submit}>
        <Form form={modalForm} initialValues={values} labelCol={{ span: 6 }} wrapperCol={{ span: 14 }} onFinish={values => setItem(values)}>
          <Form.Item hidden name="PlaceId">
            <Input />
          </Form.Item>
          <Form.Item label="名称" name="PlaceName" rules={[{ required: true, message: '请输入名称!' }]}>
            <Input />
          </Form.Item>
          <Form.Item required label="状态" name="Status" valuePropName="checked">
            <Switch />
          </Form.Item>
        </Form>
      </Modal>
      <Layout className="inner-content">
        <PageHeader ghost={false} title="点位管理" />
        <Layout.Content>
          <Form form={searchForm}>
            <Row justify="space-between">
              <Col span={6}>
                <Form.Item name="PName" label="点位名称" labelCol={{ span: 8 }}>
                  <Input placeholder="点位名称" />
                </Form.Item>
              </Col>
              <Form.Item>
                <Space>
                  <Button type="primary" onClick={submit}>查询</Button>
                  <Button onClick={reset}>重置</Button>
                </Space>
              </Form.Item>
            </Row>
          </Form>
          <Card>
            <Row justify="space-between" align="middle">
              <Col>数据列表</Col>
              <Button type="primary" icon={<PlusOutlined />} onClick={() => setVisible(true)}>新建</Button>
            </Row>
            <Table size="middle" columns={columns} rowKey="PlaceId" {...tableProps} />
          </Card>
        </Layout.Content>
      </Layout>
    </Fragment>
  );
};
