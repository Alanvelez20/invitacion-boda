<template>
  <div class="main-layout">
    <Header />
    <main>
      <section id="cuenta-regresiva"><CountdownSection /></section>
      <section id="cuando-donde"><LocationSection /></section>
      <section id="itinerario"><ItinerarySection /></section>

      <section id="confirmacion">
        <RsvpSection @cazuela="showCazuela = $event" />
      </section>
      <section id="cazuela" v-if="showCazuela">
        <CazuelaSection />
      </section>

      <section id="codigo-vestimenta"><DressCodeSection /></section>
      <section id="galeria"><GallerySection /></section>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

import CountdownSection from '@/sections/CountdownSection.vue'
import LocationSection from '@/sections/LocationSection.vue'
import ItinerarySection from '@/sections/ItinerarySection.vue'
import RsvpSection from '@/sections/RsvpSection.vue'
import CazuelaSection from '@/sections/CazuelaSection.vue'
import DressCodeSection from '@/sections/DressCodeSection.vue'
import GallerySection from '@/sections/GallerySection.vue'
</script>

<style scoped>
main {
  min-height: 100vh;
  padding: 1.5rem 0;
}

.main-layout {
  background: #fffaf5;
  color: #4b2e1f;
  font-family: 'Poppins', sans-serif;
  overflow-x: hidden;
}
</style>

<!-- ⚠️ Esto no va scoped -->
<style>
html {
  scroll-behavior: smooth;
}
section {
  scroll-snap-align: start;
  min-height: 100vh;
}
</style>
