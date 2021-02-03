import React, { Fragment, useState, useEffect } from 'react';
import { request } from 'umi';
import { useAntdTable } from 'ahooks';
import { Layout, Modal, Form, Row, Col, Input, Select, Button, PageHeader, Card, Table, Space, Divider, Popconfirm, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

interface Item {
  index?: number,
  id: string,
  uName: string
}

export default () => {
  const [areas, setAreas] = useState([]);
  const [points, setPoints] = useState([]);
  const [visible, setVisible] = useState(false);
  const [values, setValues]: any = useState({});
  const [modalForm] = Form.useForm();
  const [searchForm] = Form.useForm();
  const { search: { submit, reset }, refresh, tableProps } = useAntdTable(getList, { form: searchForm });

  const columns = [{
    title: '序号',
    dataIndex: 'index',
  }, {
    title: '单位名称',
    dataIndex: 'uName',
  }, {
    title: '街道',
    dataIndex: 'Street',
  }, {
    title: '社区',
    dataIndex: 'Community',
  }, {
    title: '单位类型',
    dataIndex: 'uType',
  }, {
    title: '单位地址',
    dataIndex: 'Address',
  }, {
    title: '负责人',
    dataIndex: 'HeadPeople',
  }, {
    title: '负责人电话',
    dataIndex: 'HeadTel',
  }, {
    title: '分色管理',
    dataIndex: 'colorseparation',
  }, {
    title: '消防等级',
    dataIndex: 'FireRateId',
  }, {
    title: '操作',
    dataIndex: 'action',
    render(text: string, record: Item) {
      return (
        <Fragment>
          <a onClick={() => { setVisible(true); modalForm.setFieldsValue(record); }}>编辑</a>
          <Divider type="vertical" />
          <Popconfirm title="确定删除当前单位吗？" onConfirm={() => deleteItem(record)}>
            <a>删除</a>
          </Popconfirm>
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

  async function setItem({ id: UNum, uName: UName }: Item) {
    await request('Unit/AddUnit', {
      method: 'POST',
      data: { UNum, UName }
    })
    await refresh()
    setVisible(false)
    message.success(`${UNum ? '编辑' : '新建'}单位成功`)
  }

  async function deleteItem({ id: UNum }: Item) {
    await request('Unit/DelUnit', {
      method: 'POST',
      data: { UNum }
    })
    await refresh()
    message.success('删除单位成功')
  }


  return (
    <Fragment>
      <Modal
        centered
        forceRender
        visible={visible}
        title={`${modalForm.getFieldValue('id') ? '编辑' : '新建'}单位`}
        onCancel={() => { setVisible(false); modalForm.resetFields(); }}
        onOk={modalForm.submit}>
        <Form form={modalForm} initialValues={values} labelCol={{ span: 6 }} wrapperCol={{ span: 14 }} onFinish={values => setItem(values)}>
          <Form.Item hidden name="id">
            <Input />
          </Form.Item>
          <Form.Item label="单位名称" name="uName" rules={[{ required: true, message: '请输入名称!' }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
      <Layout className="inner-content">
        <PageHeader ghost={false} title="单位信息列表" />
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
                <Form.Item initialValue="" name="id" label="单位选择" labelCol={{ span: 12 }}>
                  <Select placeholder="单位选择">
                    <Select.Option value="">全部</Select.Option>
                    {areas.map(({ id, name }) => <Select.Option value={id}>{name}</Select.Option>)}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={4}>
                <Form.Item initialValue="" name="PointId" label="点位选择" labelCol={{ span: 12 }}>
                  <Select placeholder="点位选择">
                    <Select.Option value="">全部</Select.Option>
                    {points.map(({ id, name }) => <Select.Option value={id}>{name}</Select.Option>)}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item name="HeadPeople" label="负责人">
                  <Input placeholder="负责人" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item name="Colorseparation" label="分色">
                  <Input placeholder="分色" />
                </Form.Item>
              </Col>
              <Col span={4}>
                <Form.Item initialValue="" name="FireRateId" label="消防等级" labelCol={{ span: 12 }}>
                  <Select placeholder="消防等级">
                    <Select.Option value="">全部</Select.Option>
                    <Select.Option value="1">一级</Select.Option>
                    <Select.Option value="2">二级</Select.Option>
                    <Select.Option value="3">三级</Select.Option>
                    <Select.Option value="4">一般</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={4}>
                <Form.Item initialValue="" name="CheckId" label="检查情况" labelCol={{ span: 12 }}>
                  <Select placeholder="检查情况">
                    <Select.Option value="">全部</Select.Option>
                    <Select.Option value="1">已检查</Select.Option>
                    <Select.Option value="2">未检查</Select.Option>
                    <Select.Option value="3">待复查</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={4}>
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
