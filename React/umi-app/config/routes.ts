export default [{
  path: '/login',
  component: '../pages/login',
  name: '登录',
  headerRender: false,
  menuRender: false,
  footerRender: false,
  hideInMenu: true,
}, {
  path: '/',
  redirect: '/company/list'
}, {
  path: '/index',
  component: '../pages/index',
  name: '首页',
  hideInMenu: true
}, {
  path: '/company',
  menu: {
    name: '单位管理',
    icon: 'layout'
  },
  routes: [{
    path: 'list',
    component: '../pages/company/list',
    name: '单位信息列表'
  }, {
    path: 'record',
    component: '../pages/company/record',
    name: '单位检查记录'
  }]
}, {
  path: '/device',
  menu: {
    name: '设备管理',
    icon: 'layout'
  },
  routes: [{
    path: '/device',
    component: '../pages/device',
    name: '设备信息管理'
  }]
}, {
  path: '/alarm',
  menu: {
    name: '预警管理',
    icon: 'layout'
  },
  routes: [{
    path: '/alarm',
    component: '../pages/alarm',
    name: '预警信息查询'
  }]
}, {
  path: '/member',
  menu: {
    name: '网格员管理',
    icon: 'layout'
  },
  routes: [{
    path: 'list',
    component: '../pages/member/list',
    name: '网格员信息管理'
  }, {
    path: 'record',
    component: '../pages/member/record',
    name: '检查记录查询'
  }]
}, {
  path: '/basis',
  menu: {
    name: '基础信息维护',
    icon: 'layout'
  },
  routes: [{
    path: 'area',
    component: '../pages/basis/area',
    name: '片区管理'
  }, {
    path: 'point',
    component: '../pages/basis/point',
    name: '点位管理'
  }, {
    path: 'street',
    component: '../pages/basis/street',
    name: '街道管理'
  }, {
    path: 'type',
    component: '../pages/basis/type',
    name: '主体类型'
  }]
}];
