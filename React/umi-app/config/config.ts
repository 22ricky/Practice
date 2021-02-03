import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  layout: {
    name: '安全监管平台'
  },
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  favicon: 'https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png',
  routes,
  locale: {},
  proxy: {
    '/Api': {
      'target': 'http://106.14.164.113:58019',
      'changeOrigin': true
    }
  }
});