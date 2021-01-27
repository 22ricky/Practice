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
  routes,
  locale: {},
  proxy: {
    '/Api': {
      'target': 'http://106.14.164.113:58019',
      'changeOrigin': true
    }
  }
});