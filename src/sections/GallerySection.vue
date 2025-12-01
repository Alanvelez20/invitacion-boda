<template>
  <section id="galeria" class="gallery-section">
    <h2>Galería</h2>

    <!-- GRID DE FOTOS -->
    <div class="gallery-grid">
      <div
        v-for="(foto, index) in fotos"
        :key="index"
        class="gallery-item fade-in"
        @click="abrirLightbox(index)"
      >
        <img :src="foto" :alt="'Foto ' + (index + 1)" />
      </div>
    </div>

    <!-- LIGHTBOX -->
    <div v-if="lightboxAbierto" class="lightbox" @click.self="cerrarLightbox">
      <button class="close-btn" @click="cerrarLightbox">✕</button>

      <!-- BOTÓN ANTERIOR -->
      <button class="nav-btn left" @click.stop="anterior">‹</button>

      <!-- IMAGEN GRANDE -->
      <img :src="fotos[fotoActual]" class="lightbox-img fade-in" />

      <!-- BOTÓN SIGUIENTE -->
      <button class="nav-btn right" @click.stop="siguiente">›</button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const fotos = [
  '/src/assets/images/932A9854.jpg', //1
  '/src/assets/images/932A9933.jpg', //4
  '/src/assets/images/932A9916.jpg', //7
  '/src/assets/images/932A9704.jpg', //2
  '/src/assets/images/932A9850.jpg', //5
  '/src/assets/images/932A9687.jpg', //8
  '/src/assets/images/932A9791.jpg', //3
  '/src/assets/images/932A9908.jpg', //6
  '/src/assets/images/932A9904.jpg', //9
]

// Estado del lightbox
const lightboxAbierto = ref(false)
const fotoActual = ref(0)

const abrirLightbox = (index) => {
  fotoActual.value = index
  lightboxAbierto.value = true
}

const cerrarLightbox = () => {
  lightboxAbierto.value = false
}

const siguiente = () => {
  fotoActual.value = (fotoActual.value + 1) % fotos.length
}

const anterior = () => {
  fotoActual.value = (fotoActual.value - 1 + fotos.length) % fotos.length
}

// Soporte para teclas ← → y ESC
const manejarTeclas = (e) => {
  if (!lightboxAbierto.value) return

  if (e.key === 'ArrowRight') siguiente()
  if (e.key === 'ArrowLeft') anterior()
  if (e.key === 'Escape') cerrarLightbox()
}

onMounted(() => window.addEventListener('keydown', manejarTeclas))
onUnmounted(() => window.removeEventListener('keydown', manejarTeclas))
</script>

<style scoped>
.gallery-section {
  min-height: 100vh;
  padding: 4rem 2rem;
  background: white url('https://www.transparenttextures.com/patterns/white-linen.png');
  background-size: 250px 250px;
  text-align: center;
}

.gallery-section h2 {
  font-size: 2.6rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 0.8rem;
}

/* GRID TIPO PINTEREST */
.gallery-grid {
  column-count: 3;
  column-gap: 1rem;
}

.gallery-item {
  break-inside: avoid;
  margin-bottom: 1rem;
  border-radius: 14px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
}

.gallery-item img {
  width: 100%;
  border-radius: 14px;
  object-fit: cover;
  transition:
    transform 0.4s ease,
    filter 0.4s ease;
}

/* Hover */
.gallery-item:hover img {
  transform: scale(1.06);
  filter: brightness(0.85);
}

/* ANIMACIÓN FADE IN */
.fade-in {
  animation: fadeIn 0.7s ease forwards;
  opacity: 0;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

/* Responsive */
@media (max-width: 900px) {
  .gallery-grid {
    column-count: 2;
  }
}
@media (max-width: 600px) {
  .gallery-grid {
    column-count: 1;
  }
}

/* LIGHTBOX */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9000;
  padding: 0rem;
}

.lightbox-img {
  max-width: 80%;
  max-height: 85%;
  border-radius: 12px;
  object-fit: contain;
}

/* Botón cerrar */
.close-btn {
  position: absolute;
  top: 25px;
  right: 25px;
  font-size: 2rem;
  background: transparent;
  color: white;
  border: none;
  cursor: pointer;
}

/* Botones Navegación */
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 3rem;
  color: white;
  background: rgba(0, 0, 0, 0.3);
  border: none;
  padding: 0.3rem 1rem;
  cursor: pointer;
  border-radius: 8px;
  transition: background 0.3s;
}

.nav-btn:hover {
  background: rgba(0, 0, 0, 0.5);
}

.nav-btn.left {
  left: 20px;
}

.nav-btn.right {
  right: 20px;
}
</style>
