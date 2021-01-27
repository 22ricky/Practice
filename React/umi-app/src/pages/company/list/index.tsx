import React from 'react';
import { Layout, Button, Col, Form, Input, Row, Table, Select, Space } from 'antd';
import { useAntdTable } from 'ahooks';
import { PaginatedParams } from 'ahooks/lib/useAntdTable';

const { Option } = Select;

interface Item {
  name: {
    last: string;
  };
  email: string;
  phone: string;
  gender: 'male' | 'female';
}

interface Result {
  total: number;
  list: Item[];
}

const getTableData = (
  { current, pageSize }: PaginatedParams[0],
  formData: Object,
): Promise<Result> => {
  let query = `page=${current}&size=${pageSize}`;
  Object.entries(formData).forEach(([key, value]) => {
    if (value) {
      query += `&${key}=${value}`;
    }
  });

  return fetch(`https://randomuser.me/api?results=55&${query}`)
    .then((res) => res.json())
    .then((res) => ({
      total: res.info.results,
      list: res.results,
    }));
};

export default () => {
  const [form] = Form.useForm();

  const { tableProps, search } = useAntdTable(getTableData, {
    defaultPageSize: 5,
    form,
  });

  const { submit, reset } = search;

  const columns = [
    {
      title: 'name',
      dataIndex: 'name.last',
    },
    {
      title: 'email',
      dataIndex: 'email',
    },
    {
      title: 'phone',
      dataIndex: 'phone',
    },
    {
      title: 'gender',
      dataIndex: 'gender',
    },
  ];

  const searchForm = (
    <Form form={form}>
      <Row gutter={24}>
        <Col span={8}>
          <Form.Item label="name" name="name">
            <Input placeholder="name" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="email" name="email">
            <Input placeholder="email" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="phone" name="phone">
            <Input placeholder="phone" />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="end">
        <Form.Item>
          <Space>
            <Button type="primary" onClick={submit}>查询</Button>
            <Button onClick={reset}>重置</Button>
          </Space>
        </Form.Item>
      </Row>
    </Form>
  );

  return (
    <Layout className="inner-content">
      {searchForm}
      <Table columns={columns} rowKey="email" {...tableProps} />
    </Layout>
  );
};
