<template>
  <section id="gallery" class="gallery-section">
    <h2>Galería</h2>
  </section>
</template>

<script setup></script>

<style scoped>
.section {
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  scroll-snap-align: start;
  transition: background 0.5s ease;
}
.gallery-section {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fdf6f0;
}
</style>
