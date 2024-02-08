import AboutViewVue from '@/views/AboutView.vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
   {
      path: '/',
      name: 'home',
      component: HomeView,
   },
   {
      path: '/about',
      name: 'about',
      component: AboutViewVue,
   },
];

const router = createRouter({
   history: createWebHashHistory(),
   routes,
});

export default router;
