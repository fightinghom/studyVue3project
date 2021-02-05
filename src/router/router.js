import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/index.vue'

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
        paht: '/',
        redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    }
  ]
});

export default router;