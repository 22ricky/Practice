import React, { useState, useEffect } from 'react';
import { List, Row, Col, Button, Divider, Popconfirm, message } from 'antd';
import { getArticles, delArticle } from '../static/api/index'
import { Link } from 'react-router-dom';

export default function () {
  const [data, setData] = useState([]);
  useEffect(() => {
    articles();
  }, []);
  async function articles() {
    const data = await getArticles();
    setData(data);
  }
  async function handleDelete(id) {
    await delArticle({ id });
    message.success('删除文章成功')
    await articles();
  }
  return (
    <List
      bordered
      dataSource={data}
      header={
        <Row>
          <Col span={8}>文章标题</Col>
          <Col span={4}>文章类型</Col>
          <Col span={4}>发布日期</Col>
          <Col span={4}>浏览人数</Col>
          <Col span={4}>操作</Col>
        </Row>
      }
      renderItem={({ id, title, typeName, addTime, view_count }) => (
        <List.Item>
          <Col span={8}>{title}</Col>
          <Col span={4}>{typeName}</Col>
          <Col span={4}>{addTime}</Col>
          <Col span={4}>{view_count}</Col>
          <Col span={4}>
            <Link to={`/article/${id}`}>
              <Button type="primary" size="small">修改</Button>
            </Link>
            <Divider type="vertical" />
            <Popconfirm title="确定要删除当前文章吗？" onConfirm={() => handleDelete(id)}>
              <Button type="danger" size="small">删除</Button>
            </Popconfirm>
          </Col>
        </List.Item>
      )}
    />
  );
}