<script setup>
import { ref } from 'vue';
import Home from '@/views/Home/index.vue'
import { SpeedInsights } from '@vercel/speed-insights/vue';
import versionInfo from '@/utils/version.js';

// 路由判断
const showHome = ref(true);

// 检查路径
const checkRoute = () => {
  const path = window.location.pathname;

  if (path === '/version') {
    // 返回版本信息的 JSON 数据
    showHome.value = false;
    return sendVersionInfo();
  } else if (path === '/') {
    // 显示主页
    showHome.value = true;
  }
};

// 发送版本信息
const sendVersionInfo =  () => {
   // 模拟返回 JSON 数据  
  const jsonVersion = JSON.stringify(versionInfo, null, 2);
  document.body.innerHTML = `<pre>${jsonVersion}</pre>`;
};

// 初始化时检查路径
checkRoute();

// 监听前进/后退按钮
window.addEventListener('popstate', checkRoute);
</script>

<template>
  <div v-if="showHome">
    <Home />
    <SpeedInsights />
  </div>

</template>

<style scoped></style>
