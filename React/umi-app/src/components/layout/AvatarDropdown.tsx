import React from 'react';
import { Dropdown, Menu, Avatar } from 'antd';
import { Link, useModel } from 'umi';

export default function AvatarDropdown() {
  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/login">退出登录</Link>
      </Menu.Item>
    </Menu>
  );
  const { initialState: { name } }: any = useModel('@@initialState');
  return (
    <Dropdown overlay={menu}>
      <Avatar>{name}</Avatar>
    </Dropdown>
  );
}