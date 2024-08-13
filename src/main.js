import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from './locales/index.js'; // 确保路径正确
import { inject } from "@vercel/analytics"

inject();
const app = createApp(App);
app.use(i18n).mount('#app');
