import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home/index.vue'
import Version from '@/views/Home/components/Version.vue'

const routes = [
  { path: '/', component: Home },
  {
    path: '/version',
    component: Version,
  },
  {
    path: '/:pathMatch(.*)*', 
    component: Home
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
