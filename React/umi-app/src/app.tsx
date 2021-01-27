import React from 'react';
import { history } from 'umi';
import AvatarDropdown from '@/components/layout/AvatarDropdown';
import Footer from '@/components/layout/Footer';
import './app.less';

export async function getInitialState() {
  return { name: 'admin' }
}

export const layout = ({ initialState }: any) => {
  return {
    onPageChange: () => {
      const { name } = initialState;
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