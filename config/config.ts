import { defineConfig } from 'umi';

import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd: {},
  // layout: {
  // name: 'Ant Design',
  // locale: true,
  // layout: 'side',
  // },
  routes,
});
