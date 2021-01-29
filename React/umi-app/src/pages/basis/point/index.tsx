import React, { Fragment } from 'react';
import { request } from 'umi';
import { useAntdTable } from 'ahooks';
import { Layout, PageHeader, Form, Row, Col, Input, Button, Card, Table, Space, Divider, Popconfirm } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

async function getList ({}, data: Object) {
  let { Data } = await request('Bas/GetPointList', {
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
    title: '点位名称',
    dataIndex: 'PlaceName',
  }, {
    title: '操作',
    dataIndex: 'action',
    render(text: any, record: any) {
      console.log(record)
      return (
        <Fragment>
          <a>编辑</a>
          <Divider type="vertical" />
          <Popconfirm title="确定删除当前点位吗？">
            <a>删除</a>
          </Popconfirm>
        </Fragment>
      );
    }
  }];

  return (
    <Layout className="inner-content">
      <PageHeader ghost={false} title="点位管理" />
      <Layout.Content>
        <Form form={form}>
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
            <Button type="primary" icon={<PlusOutlined />}>新建</Button>
          </Row>
          <Table size="middle" columns={columns} rowKey="PlaceId" {...tableProps} />
        </Card>
      </Layout.Content>
    </Layout>
  );
};
