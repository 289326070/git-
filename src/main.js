// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

/* 1.1:加载模块 VueResource(发送ajax请求) */
import VueResource from 'vue-resource';
/* 1.2:将VueResource 注册vue */
Vue.use(VueResource);

Vue.config.productionTip = false;

/* 文字过滤器 */
Vue.filter('MyText', function (val, index) {
  
  return val.slice(0, index) + (index>7?'...':"");
});
/* 路由 */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});




