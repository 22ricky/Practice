import React from 'react';
import { history } from 'umi';
import { Layout, Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './index.less';
import logo from '../../../public/images/login_logo.svg';

interface User {
  username: string,
  password: string,
}

export default function Login() {
  
  function onFinish(values: User) {
    const { username: name, password } = values;
    if (name === 'admin' && password === 'pass@123') {
      localStorage.setItem('user', JSON.stringify({ name }));
      history.push('/');
    } else {
      message.error({
        content: '用户名或密码不正确',
        style: { marginTop: '52vh' }
      });
    }
  }
  
  return (
    <Layout className={styles.login}>
      <Layout.Content>
        <img className={styles.logo} src={logo} />
        <h3>经开区安全监管平台管理系统</h3>
        <p>Safety Supervision Platform Management System</p>
        <Form onFinish={onFinish}>
          <Form.Item name="username" rules={[{ required: true, message: '请输入用户名称!' }]}>
            <Input size="large" prefix={<UserOutlined />} placeholder="请输入用户名称" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: '请输入登录密码!' }]}>
            <Input size="large" prefix={<LockOutlined />} placeholder="请输入登录密码" />
          </Form.Item>
          <Form.Item>
            <Button block size="large" type="primary" htmlType="submit">登录</Button>
          </Form.Item>
        </Form>
      </Layout.Content>
    </Layout>
  );
}