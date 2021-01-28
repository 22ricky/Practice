import React, { Fragment } from 'react';
import { request } from 'umi';
import { useAntdTable } from 'ahooks';
import { Layout, PageHeader, Form, Row, Col, Input, Button, Table, Space, Divider, Popconfirm } from 'antd';

async function getList ({}, data: Object) {
  let { Data } = await request('Unit/GetUnitList', {
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
    title: '单位名称',
    dataIndex: 'uName',
  }, {
    title: '操作',
    dataIndex: 'action',
    render(text: any, { id }: any) {
      return (
        <Fragment>
          <a>编辑</a>
          <Divider type="vertical" />
          <Popconfirm title="确定删除当前单位吗？">
            <a>删除</a>
          </Popconfirm>
        </Fragment>
      );
    }
  }];

  return (
    <Layout className="inner-content">
      <PageHeader ghost={false} title="单位信息列表" />
      <Layout.Content>
        <Form form={form}>
          <Row justify="space-between">
            <Col span={6}>
              <Form.Item name="UName" label="单位名称" labelCol={{ span: 8 }}>
                <Input placeholder="单位名称" />
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
        <Table size="middle" columns={columns} rowKey="index" {...tableProps} />
      </Layout.Content>
    </Layout>
  );
};
