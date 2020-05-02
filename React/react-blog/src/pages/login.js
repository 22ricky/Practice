import React, { useState } from 'react';
import Particles from 'react-particles-js';
import { Spin, Card, Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { login } from '../static/api/index';
import '../static/css/login.css';


function Login({ history }) {
  const [loading, setLoading] = useState(false);
  const params = {
    particles: {
      number: { value: 80 },
      size: { value: 2 },
      color: { value: '#000' },
      line_linked: { color: '#000' },
    },
    interactivity: {
      events: {
        onhover: { enable: true }
      }
    }
  };
  async function handleSubmit(values) {
    setLoading(true);
    try {
      const { sessionId } = await login(values);
      localStorage.setItem('sessionId', sessionId);
      setLoading(false);
      history.push('/index');
    } catch (error) {
      setLoading(false);
    }
  }
  return (
    <div className="login wrap">
      <Particles className="particles" params={params} />
      <Spin tip="Loading..." spinning={loading}>
        <Card bordered title="Ricky's Blog" className="card" headStyle={{ textAlign: 'center' }}>
          <Form size="large" onFinish={handleSubmit}>
            <Form.Item name="username" rules={[{ required: true, message: '用户名不能为空' }]}>
              <Input
                prefix={<UserOutlined />}
                placeholder="请输入用户名" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: '密码不能为空' }]}>
              <Input.Password
                autoComplete="off"
                prefix={<LockOutlined />}
                placeholder="请输入密码" />
            </Form.Item>
            <Button block type="primary" htmlType="submit">登录</Button>
          </Form>
        </Card>
      </Spin>
    </div>
  );
}

export default Login;
