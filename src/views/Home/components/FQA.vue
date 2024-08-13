<template>
  <section id="section-fqa" class="bg-white dark:bg-gray-900">
    <div class="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6">
      <h2
        class="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
        {{ t('fqa.title') }}
      </h2>
      <div class="max-w-screen-md mx-auto">
        <div v-for="(faq, index) in localizedFaqs" :key="index" :id="'accordion-flush-heading-' + index">
          <h3>
            <button @click="toggle(index)" type="button"
              class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
              <span>{{ faq.question }}</span>
              <svg :class="{ 'rotate-180': activeIndex === index }" class="w-6 h-6 shrink-0 transition-transform"
                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
          </h3>
          <div v-if="activeIndex === index" :id="'accordion-flush-body-' + index"
            class="py-5 border-b border-gray-200 dark:border-gray-700">
            <div v-html="faq.answer" class="text-gray-500 dark:text-gray-400"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
// i18n
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();
const { messages } = useI18n();

const localizedFaqs = computed(() => messages.value[locale.value].fqa.fqas);


const activeIndex = ref(0);

// Function to toggle the accordion
const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>