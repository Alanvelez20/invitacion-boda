<template>
  <section id="location" class="section location-section">
    <div class="container">
      <h2 class="title">¿Cuándo y Dónde?</h2>

      <div class="divider"></div>

      <div class="grid">
        <div class="info-card">
          <h3>Fecha</h3>
          <p class="main-text">Sábado, 7 de Febrero de 2026</p>
        </div>

        <div class="info-card">
          <h3>Hora</h3>
          <p class="main-text">Recepción — 2:00 PM</p>
          <p class="sub-text">Ceremonia y celebración</p>
        </div>

        <div class="info-card">
          <h3>Lugar</h3>
          <p class="main-text">Salón de eventos Mirela</p>
          <p class="sub-text">Azcapotzalco 327, San Pedrito,<br />Tlaquepaque, Jalisco</p>
        </div>
      </div>

      <div class="map-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.5929284118447!2d-103.28661168888446!3d20.604675130861192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b3ac98085b93%3A0xc7844c037e6cea04!2sSalon%20de%20Eventos%20Mirela!5e0!3m2!1ses!2smx!4v1763925445788!5m2!1ses!2smx"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <!-- Carrusel de Fotos del Lugar -->
      <div class="carousel-container">
        <h3 class="carousel-title">Un vistazo al lugar</h3>

        <div class="carousel">
          <div
            v-for="(img, index) in venueImages"
            :key="index"
            class="carousel-slide"
            :class="{ active: index === currentSlide }"
          >
            <img :src="img" alt="Lugar del evento" />
          </div>

          <!-- Botones -->
          <button class="carousel-btn left" @click="prevSlide">❮</button>
          <button class="carousel-btn right" @click="nextSlide">❯</button>

          <!-- Indicadores -->
          <div class="carousel-dots">
            <span
              v-for="(img, index) in venueImages"
              :key="'dot-' + index"
              class="dot"
              :class="{ active: index === currentSlide }"
              @click="goToSlide(index)"
            ></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const venueImages = [
  'src/assets/images/terraza3.jpeg',
  'src/assets/images/terraza2.jpeg',
  'src/assets/images/terraza1.jpeg',
]

const currentSlide = ref(0)
let interval = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % venueImages.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + venueImages.length) % venueImages.length
}

const goToSlide = (index) => {
  currentSlide.value = index
}

onMounted(() => {
  interval = setInterval(nextSlide, 4000)
})

onBeforeUnmount(() => {
  clearInterval(interval)
})
</script>

<style scoped>
.section {
  width: 100%;
  background: white url('https://www.transparenttextures.com/patterns/white-linen.png');
  background-size: 250px 250px;
  scroll-snap-align: start;
  padding: 6rem 1rem;
  display: flex;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
}

.container {
  width: 100%;
  max-width: 1100px;
  text-align: center;
}

/* Título principal */
.title {
  font-size: 2.8rem;
  font-weight: 600;
  color: #000;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}

.divider {
  width: 80px;
  height: 4px;
  background: #d4791f;
  margin: 0 auto 3.5rem auto;
  border-radius: 2px;
}

/* GRID de los 3 cards, más grande y con mejor distribución */
.grid {
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 2rem;
  margin-bottom: 4rem;

  /* Permite mejor distribución en pantallas grandes */
  padding: 0 1rem;
}

.info-card {
  flex: 1;
  min-width: 300px;
  max-width: 350px;

  background: #ffffff;
  border: 1px solid #d4791f;
  border-radius: 18px;
  padding: 2.4rem 2rem;

  box-shadow: 0 5px 14px rgba(0, 0, 0, 0.08);
  transition: transform 0.25s ease;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.info-card:hover {
  transform: translateY(-6px);
}

/* Título de cada card */
.info-card h3 {
  font-size: 1.4rem;
  color: #d4791f;
  font-weight: 600;
  margin-bottom: 0.8rem;
}

/* Texto principal más grande */
.main-text {
  font-size: 1.2rem;
  color: #000;
  font-weight: 600;
  margin-bottom: 0.4rem;
}

/* Texto secundario */
.sub-text {
  font-size: 1rem;
  color: #000;
  line-height: 1.5;
}

/* MAPA */
.map-wrapper {
  margin: 0 auto;
  width: 100%;
  max-width: 850px;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid #d4791f;
  box-shadow: 0 5px 14px rgba(0, 0, 0, 0.08);
}

.map-wrapper iframe {
  width: 100%;
  height: 450px;
  border: none;
}

/* CARRUSEL */
.carousel-container {
  margin: 4rem auto 0;
  text-align: center;
}

.carousel-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #d4791f;
}

/* Wrapper */
.carousel {
  position: relative;
  width: 100%;
  max-width: 850px;
  height: 450px;
  margin: auto;
  overflow: hidden;
  border-radius: 18px;
  border: 1px solid #d4791f;
  box-shadow: 0 5px 14px rgba(0, 0, 0, 0.08);
}

/* Slides */
.carousel-slide {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1s ease;
}

.carousel-slide.active {
  opacity: 1;
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Botones */
.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.65);
  border: none;
  font-size: 2.2rem;
  padding: 0.4rem 0.8rem;
  cursor: pointer;
  border-radius: 10px;
  transition: 0.3s;
}

.carousel-btn:hover {
  background: rgba(255, 255, 255, 0.9);
}

.carousel-btn.left {
  left: 10px;
}

.carousel-btn.right {
  right: 10px;
}

/* Dots */
.carousel-dots {
  position: absolute;
  bottom: 12px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 8px;
}

.dot {
  width: 12px;
  height: 12px;
  background: #ffffffa0;
  border: 2px solid #d4791f;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
}

.dot.active {
  background: #d4791f;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .grid {
    flex-wrap: wrap;
  }

  .info-card {
    max-width: 90%;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 2.2rem;
  }

  .info-card {
    padding: 2rem 0rem;
  }

  .map-wrapper {
    height: 320px;
    width: 80%;
  }
  .carousel {
    height: 280px;
    width: 80%;
  }

  .carousel-title {
    font-size: 1.6rem;
  }

  .carousel-btn {
    font-size: 1.5rem;
  }
}
</style>
