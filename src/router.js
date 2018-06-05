import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/components/layout/layout.vue';
import Item from './views/item/item.vue';
import ItemDetail from './views/item/item-detail.vue';
import ItemNote from './views/item/item-note.vue';
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
    },
    {
      path: '/item/detail/:item_id',
      name: 'ItemDetail',
      component: ItemDetail
    },
    {
      path: '/item/note/:item_id',
      name: 'ItemNote',
      component: ItemNote
    }
  ]
});
