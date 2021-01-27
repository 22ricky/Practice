export default [
  {
    path: '/login',
    component: '../pages/login',
    name: '登录',
    headerRender: false,
    menuRender: false,
    hideInMenu: true,
  },
  { path: '/', component: '../pages/index', name: '首页', hideInMenu: true },
];
