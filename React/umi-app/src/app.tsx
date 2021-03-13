import React from 'react';
import { history } from 'umi';
import { Request } from '../config/request';
import AvatarDropdown from '@/components/layout/AvatarDropdown';
import Footer from '@/components/layout/Footer';
import './app.less';

export const layout = () => {
  return {
    onPageChange: () => {
      const { name } = JSON.parse(localStorage.getItem('user') || '{}');
      const { location } = history;
      // 如果没有登录，重定向到 login
      if (!name && location.pathname !== '/login') {
        history.push('/login');
      }
    },
    rightRender: () => <AvatarDropdown />,
    footerRender: () => <Footer />,
  };
};

export const request = Request