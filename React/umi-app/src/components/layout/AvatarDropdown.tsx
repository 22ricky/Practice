import React from 'react';
import { Dropdown, Menu, Row, Avatar } from 'antd';
import { Link, useModel } from 'umi';

export default function AvatarDropdown() {
  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/">退出登录</Link>
      </Menu.Item>
    </Menu>
  );
  const { initialState: { name } }: any = useModel('@@initialState');
  return (
    <Dropdown overlay={menu} getPopupContainer={(): any => document.querySelector('header.ant-pro-fixed-header')}>
      <Row align="middle"><Avatar style={{ marginRight: 8 }} />{name}</Row>
    </Dropdown>
  );
}