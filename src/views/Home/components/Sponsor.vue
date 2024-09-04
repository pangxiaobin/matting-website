<template>
    <section data-aos="fade-up" id="section-sponsor" class="bg-white dark:bg-gray-900">
        <div class="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6">
            <h2
                class="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
                {{ t('sponsor.title') }}
            </h2>
            <!-- 介绍 -->
            <div class="flex flex-col items-center">
                <h2 class="mb-6 text-2xl font-bold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-xl dark:text-white">{{ t('sponsor.desc') }}</h2>
                <div class="flex flex-col items-center">
                    <img :src="wx_sponsor" alt="" width="300">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import wx_sponsor from '@/assets/wx_sponsor.png'

const { t } = useI18n()


</script>

<style scoped></style>