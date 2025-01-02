<template>
    <section data-aos="fade-up" id="section-download" class="bg-white dark:bg-gray-900">
        <div class="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6">
            <h2
                class="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
                {{ t('download.title') }}
            </h2>
            <div class="flex flex-col items-center justify-center lg:flex-row mb-4">
                {{ t('download.tips') }}  <span class="font-bold text-green-400	">{{ t('download.last_version') }}:{{ version }}</span>
            </div>
            <div class="flex flex-col items-center justify-center lg:flex-row mb-4">
                <span class="font-blod text-red-400">{{ t('download.tips1') }}</span>
            </div>
            <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 justify-center">
                <a href="https://limit-pc.20133075.xyz/link/JMH2ZAfLAaqzVrqkSMTnjDFytqQl1lBryAjEIRcH9vdIlYUeFkeVFknz0xyFGXw8YD3mMvX378XIJEFVXRiglK" target="_blank"
                    class="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    <img src="https://www.favicon.vip/get.php?url=https://drive.uc.cn/" class="w-4 h-4 mr-2" alt=""> {{ t('download.uc') }}
                </a>
                <a href="https://limit-pc.20133075.xyz/link/JMH2ZAfLAarfPlkiHDOXE9WUTAPHbvlADkGtMa0Fe5HEqaKP5oxExMjLAlp7PiqN6J7DFezMr3Zhhnd5fv6W4o" target="_blank"
                    class="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    <img src="https://image.quark.cn/s/uae/g/3o/broccoli/resource/202404/d94d93e0-03a2-11ef-be4c-79ebae2e18ac.vnd.microsoft.icon" class="w-4 h-4 mr-2" alt=""> {{ t('download.quark') }}
                </a>
                <a href="https://limit-pc.20133075.xyz/link/2QpmsxUfR5IADbALo5kY59xlYGHGps6jELxHjsMuB3MAXDfDAUFLMvk81sbh1mSpC3KJl6TwaFvGLXbCho79ClIPrZfdTRv19cSPcX7FGmKi" target="_blank"
                    class="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    <img src="https://www.xunlei.com/favicon-16x16.png" class="w-4 h-4 mr-2" alt=""> {{ t('download.xunlei') }}
                </a>   
                <a href="https://limit-pc.20133075.xyz/link/2QpmsxUfR5IS4KhGR5rX3ch70BHA9kuR1StyIguXFdKdjQGI8EdGzyRhoXvIy6JZT5VJBJVphyH4LBfO2QxF4mHc6JVpbiRXEhFvH54aadfW" target="_blank"
                    class="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    <img :src="baidu" class="w-4 h-4 mr-2" alt=""> {{ t('download.baidu') }}
                </a>
            </div>
        </div>
    </section>

</template>

<script setup>
import baidu from '@/assets/baidu.png'
import { useI18n } from 'vue-i18n';
import versionInfo from '@/utils/version.js';
const { t } = useI18n();
const version = versionInfo[0].version;
</script>

<style scoped></style>