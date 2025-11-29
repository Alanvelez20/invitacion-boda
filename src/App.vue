<template>
  <div>
    <EnvelopeIntro v-if="!opened" @openInvitation="handleOpenInvitation" />
    <MainLayout v-else key="main" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import EnvelopeIntro from './components/EnvelopeIntro.vue'
import MainLayout from '@/layouts/MainLayout.vue'

const opened = ref(false)

const handleOpenInvitation = () => {
  opened.value = true
}
</script>

<style>
body {
  margin: 0;
  background-color: #f5f5f5;
  font-family: 'Poppins', sans-serif;
}
html {
  scroll-behavior: smooth;
}
</style>
