import { createApp } from 'vue';
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import globalComponents from '@/components';
import App from './App.vue';

import router from './router';
import store from './store';
import directive from './directive';
import i18n from './locale';

// 请求拦截器
import '@/utils/interceptor';

import './mock';

// arco样式
import '@arco-design/web-vue/dist/arco.css';
// 全局样式
import '@/assets/style/global.less';

async function bootstrap() {
  const app = createApp(App);

  // 注册arco-ui和icon
  app.use(ArcoVue, {});
  app.use(ArcoVueIcon);

  // 注册路由和全局store状态
  app.use(router);
  app.use(store);

  // 注册国际化
  app.use(i18n);

  // 注册全局组件
  app.use(globalComponents);

  // 注册指令集
  app.use(directive);

  app.mount('#app');
}

bootstrap();
