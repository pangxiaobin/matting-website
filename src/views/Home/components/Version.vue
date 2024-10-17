<template>
  <div class="version bg-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto my-8">
    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Version</h2>
    <p class="text-sm  text-red-400 font-medium mb-4">手机访问 https://matting.20133075.xyz 转存资源，支持开发者</p>
    <div v-for="(versionInfo, idx) in versionInfoList" :key="idx" class="mt-8">
      <p class="text-lg text-gray-600 font-medium mb-2">版本 : {{ versionInfo.version }}</p>
      <p class="text-lg text-gray-600 font-medium mb-4"> 发布日期 : {{ versionInfo.date }}</p>
      <p class="text-lg text-gray-600 font-medium mb-2">更新内容 : </p>
      <ul class="list-disc pl-6 space-y-2">
        <li v-for="(line, index) in formatDescription(versionInfo.description)" :key="index" class="text-gray-700">{{ line }}</li>
      </ul>
    </div>

  </div>
</template>

<script setup>
import versionInfoList from '@/utils/version.js';
const formatDescription = (description) => {
  return description.split(';').map(line => line.trim());
}
</script>

<style scoped></style>