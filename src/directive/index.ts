/**
 * 指令集
 */

import { App } from 'vue';
import permission from './permission';

export default {
  // 注册全局指令
  install(Vue: App) {
    Vue.directive('permission', permission);
  },
};
