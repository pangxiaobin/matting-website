<template>
    <section data-aos="fade-up" id="section-download" class="bg-white dark:bg-gray-900">
        <div class="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6">
            <h2
                class="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
                {{ t('download.title') }}
            </h2>
            <div class="flex flex-col items-center justify-center lg:flex-row mb-4  dark:text-white">
               {{ t('download.tips') }} <a class="text-red-500" href="https://www.lingxiangtools.top/" target="_blank">{{ t('download.tips1') }}</a> 
            </div>
            <div class="flex flex-col items-center justify-center lg:flex-row mb-4">
                <span class="font-bold ml-4 text-green-400	">{{ t('download.last_version') }}:{{ version }}</span>
            </div>
            <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 justify-center">
                <a href="https://pan.quark.cn/s/317fb2b05c01"  target="_blank"
                class="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" viewBox="0 0 16 16"><path fill="#7c3aed" d="M10.9 0c.144.973-.254 1.92-.779 2.6c-.562.721-1.53 1.28-2.47 1.25c-.171-.931.268-1.89.8-2.53c.585-.712 1.59-1.26 2.45-1.32zm.4 4c1.07 0 2.2.583 3.01 1.59c-2.65 1.45-2.22 5.23.458 6.24q-.418.998-1.02 1.9c-.661 1.01-1.59 2.26-2.75 2.27c-.476.004-.787-.138-1.12-.292c-.39-.178-.812-.371-1.56-.368c-.744.004-1.17.195-1.57.371c-.345.154-.663.295-1.14.291c-1.16-.01-2.04-1.14-2.7-2.15c-1.85-2.81-2.04-6.12-.903-7.87c.811-1.25 2.09-1.98 3.29-1.98c.641 0 1.16.184 1.65.36c.447.159.874.312 1.36.312c.446 0 .813-.139 1.21-.29c.481-.182 1.01-.382 1.78-.382z"/></svg>
                <span>Mac</span>
                </a>
                <a href="https://pan.quark.cn/s/98150ba2d237"  target="_blank"
                class="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" viewBox="0 0 24 24"><path fill="#0891b2" d="m3 5.549l7.195-.967v7.029l-7.188.054zm7.195 6.842v7.105l-7.19-.985v-6.12zm.918-7.935L20.998 3v8.533l-9.885.078zM21 12.505L20.998 21l-9.885-1.353v-7.142z"/></svg>                
                <span>Windows</span>
                </a>
                <!-- <a href="https://xb-90e.pages.dev/link/JMH2ZAfLAasrKyyws72JDDknkpAmQV5D0t4Nky4H0TagcrDF2iiCecy5zfA2GwI7rl72OOBraQ7y3zBDzxm1Jw" target="_black"                 class="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 48 48"><g fill="none" stroke="#0891b2" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="M5.818 6.727V14h7.273"/><path d="M4 24c0 11.046 8.954 20 20 20v0c11.046 0 20-8.954 20-20S35.046 4 24 4c-7.402 0-13.865 4.021-17.323 9.998"/><path d="m24.005 12l-.001 12.009l8.48 8.48"/></g></svg>
                    <span>{{ t('fix.history') }}</span>
                </a> -->
                <!-- <a href="https://xb-90e.pages.dev/link/JMH2ZAfLAaqzVrqkSMTnjDFytqQl1lBryAjEIRcH9vdIlYUeFkeVFknz0xyFGXw8YD3mMvX378XIJEFVXRiglK" target="_blank"
                    class="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    <img src="https://www.favicon.vip/get.php?url=https://drive.uc.cn/" class="w-4 h-4 mr-2" alt=""> {{ t('download.uc') }}
                </a> -->
                <a href="https://pan.quark.cn/s/50f0a9c402d6" target="_blank"
                    class="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    <img src="https://image.quark.cn/s/uae/g/3o/broccoli/resource/202404/d94d93e0-03a2-11ef-be4c-79ebae2e18ac.vnd.microsoft.icon" class="w-4 h-4 mr-2" alt=""> {{ t('download.quark') }}
                </a>
                <!-- <a href="https://xb-90e.pages.dev/link/2QpmsxUfR5IADbALo5kY59xlYGHGps6jELxHjsMuB3MAXDfDAUFLMvk81sbh1mSpC3KJl6TwaFvGLXbCho79ClIPrZfdTRv19cSPcX7FGmKi" target="_blank"
                    class="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    <img src="https://www.xunlei.com/favicon-16x16.png" class="w-4 h-4 mr-2" alt=""> {{ t('download.xunlei') }}
                </a>    -->
                <a href="https://pan.baidu.com/s/1abSePaJURG59dEd8qrztng?pwd=pa23" target="_blank"
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