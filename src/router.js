import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/components/layout/layout.vue';
import Item from './views/item/item.vue';
import Plan from './views/plan/plan.vue';
import Infornmation from './views/infornmation/infornmation.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/layout',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: 'plan',
          name: 'Plan',
          component: Plan
        },
        {
          path: 'item',
          name: 'Item',
          component: Item
        },
        {
          path: 'infornmation',
          name: 'infornmation',
          component: Infornmation
        }]
    }
  ]
});
