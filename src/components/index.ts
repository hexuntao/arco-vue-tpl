/**
 * 组件
 */

import { App } from 'vue';
import Breadcrumb from './breadcrumb/index.vue';

export default {
  // 注册全局组件
  install(Vue: App) {
    Vue.component('Breadcrumb', Breadcrumb);
  },
};
