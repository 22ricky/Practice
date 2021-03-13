import React, { Fragment } from 'react';
import { request } from 'umi';
import { useAntdTable } from 'ahooks';
import { Layout, Form, Row, Col, Input, DatePicker, Button, PageHeader, Card, Table, Space, Divider, Popconfirm, Tooltip } from 'antd';
import moment from 'moment';

export default () => {
  const [searchForm] = Form.useForm();
  const { search: { submit, reset }, refresh, tableProps } = useAntdTable(getList, { form: searchForm });

  const columns = [{
    title: '序号',
    dataIndex: 'index',
  }, {
    title: '接警编号',
    dataIndex: 'RecAlarmNum',
  }, {
    title: '接警时间',
    dataIndex: 'RecAlarmTime',
  }, {
    title: '接警单位',
    dataIndex: 'RecAlarmDep',
    ellipsis: {
      showTitle: false,
    },
    render: (text: string) => (
      <Tooltip placement="topLeft" title={text}>
        {text}
      </Tooltip>
    ),
  }, {
    title: '报警内容',
    dataIndex: 'FAlarmContent',
    ellipsis: {
      showTitle: false,
    },
    render: (text: string) => (
      <Tooltip placement="topLeft" title={text}>
        {text}
      </Tooltip>
    ),
  }, {
    title: '简要警情及处理结果',
    dataIndex: 'Result',
    ellipsis: {
      showTitle: false,
    },
    render: (text: string) => (
      <Tooltip placement="topLeft" title={text}>
        {text}
      </Tooltip>
    ),
  }, {
    title: '警情发生地点',
    dataIndex: 'FAlarmPlace',
    ellipsis: {
      showTitle: false,
    },
    render: (text: string) => (
      <Tooltip placement="topLeft" title={text}>
        {text}
      </Tooltip>
    ),
  }, {
    title: '火灾部位',
    dataIndex: 'FAlarmPosition',
  }, {
    title: '处警结果',
    dataIndex: 'CJResult',
  }, {
    title: '报警人',
    dataIndex: 'FAlarmPerson',
  }, {
    title: '处警类型',
    dataIndex: 'DealAlarmType',
  }, {
    title: '处警单位',
    dataIndex: 'DealDep',
    ellipsis: {
      showTitle: false,
    },
    render: (text: string) => (
      <Tooltip title={text}>
        {text}
      </Tooltip>
    ),
  }];

  async function getList ({}, data: any) {
    const { FireAlarmId, alarmType, dateRange } = data
    let [beginTime, endTime] = dateRange || []
    beginTime = beginTime && moment(beginTime).format('YYYY-MM-DD')
    endTime = endTime && moment(endTime).format('YYYY-MM-DD')
    let { Data } = await request('Unit/GetAlarmList', {
      method: 'POST',
      data: { FireAlarmId, alarmType, beginTime, endTime }
    })
    Data = JSON.parse(Data).map((item: any, index: number) => {
      item.index = index + 1;
      return item;
    })
    console.log(Data)
    return {
      list: Data,
      total: Data.length
    }
  }

  return (
    <Layout className="inner-content">
      <PageHeader ghost={false} title="预警信息管理" />
      <Layout.Content>
        <Form form={searchForm} labelCol={{ span: 8 }}>
          <Row>
            <Col span={6}>
              <Form.Item name="FireAlarmId" label="火警ID">
                <Input placeholder="火警ID" />
              </Form.Item>
            </Col>
            {/* <Col span={6}>
              <Form.Item name="alarmType" label="预警类型">
                <Input placeholder="预警类型" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="dateRange" label="时间段">
                <DatePicker.RangePicker />
              </Form.Item>
            </Col> */}
            <Col span={6} offset={12}>
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
