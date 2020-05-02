import React, { useState, useEffect } from 'react';
import marked from 'marked';
import { Form, Row, Col, Input, Select, Button, DatePicker } from 'antd';
import { type } from '../static/api/index';
import '../static/css/form.css';

const { Option } = Select;
const { TextArea } = Input;

export default function() {
  const [form] = Form.useForm();
  const [types, setTypes] = useState([]);
  useEffect(() => {
    async function getTypes() {
      try {
        const data = await type();
        const [{ id }] = data;
        if(id || id === 0) form.setFieldsValue({ type: `${id}` });
        setTypes(data);
      } catch (error) {}
    }
    getTypes();
  }, [form]);
  async function handleSubmit(values) {
    try {
      console.log(values);
    } catch (error) {}
  }
  return (
    <Form className="form wrap" form={form} size="large" onFinish={handleSubmit}>
      <Row className="wrap" gutter={12}>
        <Col className="column wrap" span={18}>
          <Row gutter={12}>
            <Col span={20}>
              <Form.Item name="title" rules={[{ required: true, message: '文章标题不能为空' }]}>
                <Input placeholder="请输入文章标题" />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="type">
                <Select>
                  {types.map(({ id, typeName }) => <Option key={`${id}`}>{typeName}</Option>)}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row className="content" gutter={12}>
            <Col className="wrap" span={12}>
              <Form.Item className="wrap" name="content" rules={[{ required: true, message: '文章内容不能为空' }]}>
                <TextArea className="markdown-content" placeholder="文章内容" />
              </Form.Item>
            </Col>
            <Col className="wrap" span={12}>
            <Form.Item noStyle shouldUpdate={(prevValue, curValue) => prevValue.content !== curValue.content}>
              {({ getFieldValue }) => <div className="show-html wrap" dangerouslySetInnerHTML={{ __html: marked(getFieldValue('content') || '') }} />}
            </Form.Item>
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <Form.Item>
            <Row gutter={12}>
              <Col><Button>暂存文章</Button></Col>
              <Col><Button type="primary" htmlType="submit">发布文章</Button></Col>
            </Row>
          </Form.Item>
          <Form.Item name="description" rules={[{ required: true, message: '文章简介不能为空' }]}>
            <TextArea rows={4} placeholder="文章简介" />
          </Form.Item>
          <Form.Item shouldUpdate={(prevValue, curValue) => prevValue.description !== curValue.description}>
            {({ getFieldValue }) => <div className="introduce-html wrap" dangerouslySetInnerHTML={{ __html: marked(getFieldValue('description') || '') }} />}
          </Form.Item>
          <Form.Item name="time" rules={[{ required: true, message: '发布日期不能为空' }]}>
            <DatePicker placeholder="发布日期" />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}