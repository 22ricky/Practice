import React, { useState, useEffect } from 'react';
import marked from 'marked';
import moment from 'moment';
import { Form, Row, Col, Input, Select, Button, DatePicker } from 'antd';
import { type, getArticle, addArticle } from '../static/api/index';
import '../static/css/form.css';

const { Option } = Select;
const { TextArea } = Input;

export default function ({ history, match: { params: { id } } }) {
  const [form] = Form.useForm();
  const [types, setTypes] = useState([]);
  useEffect(() => {
    async function article() {
      const data = await getArticle(id);
      data.type_id = `${data.type_id}`;
      data.addTime = moment(data.addTime, 'YYYY-MM-DD');
      form.setFieldsValue(data);
    }
    async function getTypes() {
      const data = await type();
      setTypes(data);
      if (id) {
        await article();
      } else {
        const [{ id }] = data;
        if(id || id === 0) form.setFieldsValue({ type_id: `${id}` });
      }
    }
    getTypes();
  }, [form, id]);
  async function handleSubmit(values) {
    try {
      values.addTime = values.addTime.unix();
      values.view_count = Math.ceil(Math.random() * 100) + 1000;
      await addArticle(values);
      history.push('/list');
    } catch (error) {}
  }
  return (
    <Form key={id} className="form wrap" size="large" form={form} onFinish={handleSubmit}>
      <Row className="wrap" gutter={12}>
        <Col className="column wrap" span={18}>
          <Row gutter={12}>
            <Col span={20}>
              <Form.Item name="title" rules={[{ required: true, message: '文章标题不能为空' }]}>
                <Input placeholder="请输入文章标题" />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="type_id">
                <Select>
                  {types.map(({ id, typeName }) => <Option key={`${id}`}>{typeName}</Option>)}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row className="content" gutter={12}>
            <Col className="wrap" span={12}>
              <Form.Item className="wrap" name="article_content" rules={[{ required: true, message: '文章内容不能为空' }]}>
                <TextArea className="markdown-content" placeholder="文章内容" />
              </Form.Item>
            </Col>
            <Col className="wrap" span={12}>
            <Form.Item noStyle shouldUpdate={(prevValue, curValue) => prevValue.article_content !== curValue.article_content}>
              {({ getFieldValue }) => <div className="show-html wrap" dangerouslySetInnerHTML={{ __html: marked(getFieldValue('article_content') || '') }} />}
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
          <Form.Item name="introduce" rules={[{ required: true, message: '文章简介不能为空' }]}>
            <TextArea rows={4} placeholder="文章简介" />
          </Form.Item>
          <Form.Item shouldUpdate={(prevValue, curValue) => prevValue.introduce !== curValue.introduce}>
            {({ getFieldValue }) => <div className="introduce-html wrap" dangerouslySetInnerHTML={{ __html: marked(getFieldValue('introduce') || '') }} />}
          </Form.Item>
          <Form.Item name="addTime" rules={[{ required: true, message: '发布日期不能为空' }]}>
            <DatePicker placeholder="发布日期" />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}