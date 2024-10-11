import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home/index.vue'
import Version from '@/views/Home/components/Version.vue'
import versionInfo from '@/utils/version.js';

const routes = [
  { path: '/', component: Home },
  {
    path: '/version',
    component: Version,
  },
  {
    path: '/api/version',
    name: 'VersionAPI',
    beforeEnter(to, from, next) {
      // 使用原生 JavaScript 实现 JSON 响应
      const jsonResponse = JSON.stringify(versionInfo);
      const blob = new Blob([jsonResponse], { type: 'application/json' });
      const url = URL.createObjectURL(blob);

      // 将请求响应设置为 JSON
      window.location.href = url;
    }
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
