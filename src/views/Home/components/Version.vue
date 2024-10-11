<template>
    <div class="version bg-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto my-8">
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">Version</h2>
      <p class="text-lg text-gray-600 font-medium mb-2">最新版本 : {{ versionInfo.version }}</p>
      <p class="text-lg text-gray-600 font-medium mb-4"> 发布日期 : {{ versionInfo.date }}</p>
      <p class="text-lg text-gray-600 font-medium mb-2">公众号 : 努力的PLb 获取最新版本</p>
      <p class="text-lg text-gray-600 font-medium mb-2">更新内容 : </p>
      <ul class="list-disc pl-6 space-y-2">
        <li v-for="(line, index) in description" :key="index" class="text-gray-700">{{ line }}</li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import versionInfo from '@/utils/version.js';
  const description = versionInfo.description.split(';').map(line => line.trim());
  </script>
  
  <style scoped>
  </style>
  