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
    
    <!-- 赞赏 -->
    <Sponsor />

    <!-- footer -->
    <Footer />
</template>

<script setup>
import Nav from "@/views/Home/components/Nav.vue";
import FQA from "@/views/Home/components/FQA.vue";
import Detail from "@/views/Home/components/Detail.vue";
import Footer from '@/views/Home/components/Footer.vue';
import Download from '@/views/Home/components/Download.vue';
import BaseInfo from '@/views/Home/components/BaseInfo.vue'
import Sponsor from '@/views/Home/components/Sponsor.vue'

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