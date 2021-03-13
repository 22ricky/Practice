import React from 'react';
import { history } from 'umi';
import { Dropdown, Menu, Row, Avatar } from 'antd';

export default function AvatarDropdown() {
  const { name } = JSON.parse(localStorage.getItem('user') || '{}');
  const menu = (
    <Menu onClick={handleClick}>
      <Menu.Item key="logout">退出登录</Menu.Item>
    </Menu>
  );

  function handleClick({ key }: any) {
    if (key === 'logout') {
      localStorage.removeItem('user');
      history.push('/');
    }
  }
  
  return (
    <Dropdown overlay={menu} getPopupContainer={(): any => document.querySelector('header.ant-pro-fixed-header')}>
      <Row align="middle"><Avatar style={{ marginRight: 8 }} />{name}</Row>
    </Dropdown>
  );
}