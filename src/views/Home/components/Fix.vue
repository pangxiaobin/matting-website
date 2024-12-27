<template>
  <div class="fixed right-5 bottom-24 z-50 hidden md:block">
    <div 
      class="relative group flex items-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-full cursor-pointer shadow-lg transition-all duration-300"
      @mouseenter="showQR = true"
      @mouseleave="showQR = false"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
      </svg>
      <span class="ml-2 text-sm">{{ t('fix.scan') }}</span>

      <!-- QR Code Popup -->
      <div 
        v-show="showQR"
        class="absolute w-48 right-full bottom-0 mr-4 bg-white rounded-lg p-1 shadow-xl transform transition-all duration-300"
      >
        <div class="text-center">
          <img 
            src="/qrcode.png"
            alt="QR Code"
            class="w-48 h-48 object-contain"
          />
          <p class="text-gray-600 text-sm mt-4">{{ t('fix.tip') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const showQR = ref(false);
</script>
