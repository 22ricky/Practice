import React, { Fragment, useState } from 'react';
import { request } from 'umi';
import { useAntdTable } from 'ahooks';
import { PaginatedParams } from 'ahooks/lib/useAntdTable';
import { Layout, Modal, Form, Row, Col, Select, Input, Button, PageHeader, Card, Table, Space, Divider, Popconfirm, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export default () => {
  const [visible, setVisible] = useState(false);
  const [values, setValues]: any = useState({ Status: true });
  const [modalForm] = Form.useForm();
  const [searchForm] = Form.useForm();
  const { search: { submit, reset }, refresh, tableProps } = useAntdTable(getList, { form: searchForm });

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

  async function getList ({ current: pageIndex, pageSize }: PaginatedParams[0], data: Object) {
    let { Data } = await request('Device/GetDeviceList', {
      method: 'POST',
      data: Object.assign(data, { pageIndex, pageSize })
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
      <PageHeader ghost={false} title="设备信息管理" />
      <Layout.Content>
        <Form form={searchForm} labelCol={{ span: 8 }}>
          <Row>
            <Col span={6}>
              <Form.Item initialValue="" name="DeviceType" label="设备类型">
                <Select placeholder="设备类型">
                  <Select.Option value="">全部</Select.Option>
                  <Select.Option value="1">燃气泄露报警器</Select.Option>
                  <Select.Option value="2">智慧用电</Select.Option>
                  <Select.Option value="3">烟感报警器</Select.Option>
                  <Select.Option value="4">压力监测</Select.Option>
                  <Select.Option value="5">水位监测</Select.Option>
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
            <Button type="primary" icon={<PlusOutlined />}>新建</Button>
          </Row>
          <Table size="middle" columns={columns} rowKey="index" {...tableProps} />
        </Card>
      </Layout.Content>
    </Layout>
  );
};
