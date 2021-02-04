import React, { Fragment, useState, useEffect } from 'react';
import { request } from 'umi';
import { useAntdTable } from 'ahooks';
import { Layout, Form, Row, Col, Input, Select, Button, PageHeader, Card, Table, Space, Divider, Popconfirm } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export default () => {
  const [areas, setAreas] = useState([]);
  const [points, setPoints] = useState([]);
  const [searchForm] = Form.useForm();
  const { search: { submit, reset }, refresh, tableProps } = useAntdTable(getList, { form: searchForm });

  const columns = [{
    title: '序号',
    dataIndex: 'index',
  }, {
    title: '单位名称',
    dataIndex: 'SubjectName',
  }, {
    title: '街道',
    dataIndex: 'Street',
  }, {
    title: '社区',
    dataIndex: 'Community',
  }, {
    title: '检查时间',
    dataIndex: 'CheckDate',
  }, {
    title: '检查人',
    dataIndex: 'CheckPerson',
  }, {
    title: '检查结果',
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

  useEffect(() => {
    Promise.all([
      getAreaList(),
      getPointList()
    ])
  }, [])

  async function getAreaList () {
    let { Data } = await request('Unit/GetAreaList', { method: 'POST' })
    Data = JSON.parse(Data)
    setAreas(Data)
  }

  async function getPointList () {
    let { Data } = await request('Unit/GetPointList', { method: 'POST' })
    Data = JSON.parse(Data)
    setPoints(Data)
  }

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
              <Form.Item name="UName" label="单位名称">
                <Input placeholder="单位名称" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="UType" label="单位类型">
                <Input placeholder="单位类型" />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item initialValue="" name="AreaId" label="片区选择" labelCol={{ span: 12 }}>
                <Select placeholder="片区选择">
                  <Select.Option value="">全部</Select.Option>
                  {areas.map(({ id, name }) => <Select.Option key={id} value={name}>{name}</Select.Option>)}
                </Select>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item initialValue="" name="PointId" label="点位选择" labelCol={{ span: 12 }}>
                <Select placeholder="点位选择">
                  <Select.Option value="">全部</Select.Option>
                  {points.map(({ id, name }) => <Select.Option key={id} value={name}>{name}</Select.Option>)}
                </Select>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="Colorseparation" label="分色">
                <Input placeholder="分色" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item initialValue="" name="KeyUnitId" label="重点单位">
                <Select placeholder="重点单位">
                  <Select.Option value="">全部</Select.Option>
                  <Select.Option value="1">重点单位</Select.Option>
                  <Select.Option value="2">一般单位</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item initialValue="" name="CheckId" label="检查结果" labelCol={{ span: 12 }}>
                <Select placeholder="检查结果">
                  <Select.Option value="">全部</Select.Option>
                  <Select.Option value="1">合格</Select.Option>
                  <Select.Option value="2">不合格</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
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
