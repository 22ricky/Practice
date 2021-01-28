import React, { Fragment } from 'react';
import { request } from 'umi';
import { useAntdTable } from 'ahooks';
import { Layout, Form, Row, Col, Input, Button, Table, Space, Divider, Popconfirm } from 'antd';

async function getList ({}, data: Object) {
  let { Data } = await request('Device/GetDeviceList', {
    method: 'POST',
    data
  })
  Data = JSON.parse(Data).map((item: any, index: number) => {
    item.index = index + 1;
    return item;
  })
  return {
    list: Data,
    total: Data.length
  }
}

export default () => {
  const [form] = Form.useForm();
  const { tableProps, search } = useAntdTable(getList, { form });

  const { submit, reset } = search;

  const columns = [{
    title: '序号',
    dataIndex: 'index',
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
    render(text: any, { id }: any) {
      return (
        <Fragment>
          <a>编辑</a>
          <Divider type="vertical" />
          <Popconfirm title="确定删除当前设备吗？">
            <a>删除</a>
          </Popconfirm>
        </Fragment>
      );
    }
  }];

  return (
    <Layout className="inner-content">
      <Form form={form}>
        <Row justify="space-between">
          <Col span={6}>
            <Form.Item name="DeviceName" label="设备名称" labelCol={{ span: 8 }}>
              <Input placeholder="设备名称" />
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
      <Table columns={columns} rowKey="index" {...tableProps} />
    </Layout>
  );
};
