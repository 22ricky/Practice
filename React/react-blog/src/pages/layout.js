import React from 'react';
import { Layout, Menu } from 'antd';
import { Route, Redirect, Link } from 'react-router-dom';
import { EditOutlined, UnorderedListOutlined } from '@ant-design/icons';
import '../static/css/layout.css';
const { Header, Content, Footer, Sider } = Layout;

export default function({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={routeProps => {
        const { location: { pathname } } = routeProps
        const selectedKey = pathname.substr(1)
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
            <Menu theme="dark" mode="inline" selectedKeys={[selectedKey]}>
              <Menu.Item key="article">
                <EditOutlined />
                <Link to="/article">添加文章</Link>
              </Menu.Item>
              <Menu.Item key="list">
                <UnorderedListOutlined />
                <Link to="/list">文章列表</Link>
              </Menu.Item>
              {/* <Menu.Item key="3">
                <MessageOutlined />
                <Link>留言管理</Link>
              </Menu.Item> */}
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