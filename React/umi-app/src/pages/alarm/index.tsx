import React, { Fragment } from 'react';
import { request } from 'umi';
import { useAntdTable } from 'ahooks';
import { Layout, Form, Row, Col, Input, DatePicker, Button, PageHeader, Card, Table, Space, Divider, Popconfirm } from 'antd';

export default () => {
  const [searchForm] = Form.useForm();
  const { search: { submit, reset }, refresh, tableProps } = useAntdTable(getList, { form: searchForm });

  const columns = [{
    title: '序号',
    dataIndex: 'index',
  }, {
    title: '预警类型',
    dataIndex: 'alarmType',
  }, {
    title: '预警设备',
    dataIndex: 'alarmDevice',
  }, {
    title: '预警地址',
    dataIndex: 'Community',
  }, {
    title: '报警时间',
    dataIndex: 'CheckDate',
  }, {
    title: '处置时间',
    dataIndex: 'CheckResults',
  }, {
    title: '操作',
    dataIndex: 'action',
    render(text: string, record: any) {
      return (
        <Fragment>
          {/* <a>检查单</a>
          <Divider type="vertical" />
          <a>整改书</a>
          <Divider type="vertical" />
          <a>复查结果</a>
          <Divider type="vertical" />
          <a>对比图/隐患图</a> */}
        </Fragment>
      );
    }
  }];

  async function getList ({}, data: Object) {
    let { Data } = await request('Unit/GetRecordList', {
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

  return (
    <Layout className="inner-content">
      <PageHeader ghost={false} title="单位检查记录" />
      <Layout.Content>
        <Form form={searchForm} labelCol={{ span: 8 }}>
          <Row>
            <Col span={6}>
              <Form.Item name="alarmDevice" label="预警设备">
                <Input placeholder="预警设备" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="alarmType" label="预警类型">
                <Input placeholder="预警类型" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="beginTime" label="时间段">
                <DatePicker />
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
            <Button type="primary" onClick={refresh}>刷新</Button>
          </Row>
          <Table size="middle" columns={columns} rowKey="index" {...tableProps} />
        </Card>
      </Layout.Content>
    </Layout>
  );
};
