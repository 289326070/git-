import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';

/* 导入组件 */
import Goods from '../components/goods/goods.vue'; /**/
import Retingss from '../components/retingss/retingss.vue';
import Seller from '../components/seller/seller.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/asd',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {path: '/', component: Goods},
    {path: '/Retingss', component: Retingss},
    {path: '/Seller', component: Seller}
  ]
});
