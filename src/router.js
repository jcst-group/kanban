import Vue from 'vue';
import Router from 'vue-router';
import home from '@/ddwb/Home.vue'
import base1 from '@/ddwb/base1.vue'
import plot1 from '@/ddwb/plot1.vue'
import company from '@/ddwb/company.vue'
import financial from '@/ddwb/financial.vue'
import test from '@/ddwb/test.vue'
import trade from '@/ddwb/trade.vue'
import standby from '@/ddwb/standby.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name:'home',
      component: home
    },
    // {
    //     path: '/base',
    //     name:'base',
    //     component: base,
    //     hidden: true,
    // },

    //   {
    //     path: '/Plot',
    //     name:'plot',
    //     component: plot,
    //     hidden: true,
    //   },
      {
        path: '/base',
        name:'base',
        component: base1,
        hidden: true,
      },
      {
        path: '/plot',
        name:'plot',
        component: plot1,
        hidden: true,
      },
      {
        path: '/company',
        name: 'company',
        component: company,
        hidden: true
      },
      {
        path: '/financial',
        name: 'financial',
        component: financial,
        hidden: true
      },
      {
        path: '/test',
        name: 'test',
        component: test,
        hidden: true
      },
      {
        path: '/trade',
        name: 'trade',
        component: trade,
        hidden: true
      },
      {
        path: '/standby',
        name: 'standby',
        component: standby,
        hidden: true
      }
    // {
    //   path: '/load',
    //   name: 'load',
    //   component: () => import('@/kanban/Load.vue'),
    // },
    // {
    //   path: '/home',
    //   name:'home',
    //   component: () => import('@/kanban/Home.vue'),
    //   hidden: true,
    // },
    // {
    //   path: '/newhome',
    //   name:'newhome',
    //   component: () => import('@/kanban/newHome.vue'),
    //   hidden: true,
    // },
    // {
    //   path: '/sky',
    //   name:'sky',
    //   component: () => import('@/kanban/sky.vue'),
    //   hidden: true,
    // },
    // {
    //   path: '/ground',
    //   name:'ground',
    //   component: () => import('@/kanban/ground.vue'),
    //   hidden: true,
    // },
    // {
    //   path: '/crop',
    //   name:'crop',
    //   component: () => import('@/kanban/crop.vue'),
    //   hidden: true,
    // },
    // {
    //   path: '/person',
    //   name:'person',
    //   component: () => import('@/kanban/person.vue'),
    //   hidden: true,
    // },

  ],
});
