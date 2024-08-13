<template>
    <!-- navbar  -->
    <Nav></Nav>

    <!-- BaseInfo -->
    <BaseInfo />
    <!-- 下载 -->
    <Download />

    <!-- 详情 -->
    <Detail />

    <!-- fqas -->
    <FQA />

    <!-- footer -->
    <Footer />

</template>

<script setup>
import { ref } from 'vue'
import Nav from "@/views/Home/components/Nav.vue";
import FQA from "@/views/Home/components/FQA.vue";
import Detail from "@/views/Home/components/Detail.vue";
import Footer from '@/views/Home/components/Footer.vue';
import Download from '@/views/Home/components/Download.vue';
import Home from '@/views/Home/components/BaseInfo.vue'
import BaseInfo from './components/BaseInfo.vue';

const faqContent = ref([
    {
        question: 'Can I use Landwind in open-source projects?',
        answer: `
      <p>Landwind is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
      <p>Check out this guide to learn how to <a href="#" class="text-green-600 dark:text-green-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
    `,
    },
    {
        question: 'Is there a Figma file available?',
        answer: `
      <p>Landwind is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
      <p>Check out the <a href="#" class="text-green-600 dark:text-green-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Landwind.</p>
    `,
    },
    // Add more FAQs as needed
]);

</script>

<style scoped>
.st0 {
    fill: #0acf83
}

.st1 {
    fill: #a259ff
}

.st2 {
    fill: #f24e1e
}

.st3 {
    fill: #ff7262
}

.st4 {
    fill: #1abcfe
}
</style>