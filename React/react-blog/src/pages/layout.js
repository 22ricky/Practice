import React from 'react';
import { Layout, Menu } from 'antd';
import { Route, Redirect } from 'react-router-dom';
import { EditOutlined, UnorderedListOutlined, MessageOutlined } from '@ant-design/icons';
import '../static/css/layout.css';
const { Header, Content, Footer, Sider } = Layout;

export default function({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={routeProps => {
        return localStorage.getItem('sessionId')
        ? <Layout className="layout wrap">
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="layout-logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <EditOutlined />
                <span className="nav-text">添加文章</span>
              </Menu.Item>
              <Menu.Item key="2">
                <UnorderedListOutlined />
                <span className="nav-text">文章列表</span>
              </Menu.Item>
              <Menu.Item key="3">
                <MessageOutlined />
                <span className="nav-text">留言管理</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="layout-right">
            <Header className="layout-header" />
            <Content className="layout-content">
              <div className="layout-content-wrap">
                <Component {...routeProps} />
              </div>
            </Content>
            <Footer className="layout-footer">Copyright ©2020 Ricky</Footer>
          </Layout>
        </Layout>
        : <Redirect to="/login" />;
      }}
    />
  );
}