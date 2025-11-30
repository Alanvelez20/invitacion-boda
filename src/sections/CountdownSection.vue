<template>
  <section id="countdown" class="section countdown-section">
    <div class="countdown-container">
      <h2 class="title">Cuenta regresiva para nuestra boda</h2>
      <h3 class="date">07 · Febrero · 2026</h3>

      <div class="timer">
        <div class="time-box">
          <span class="number">{{ timeLeft.days }}</span>
          <span class="label">Días</span>
        </div>
        <div class="time-box">
          <span class="number">{{ timeLeft.hours }}</span>
          <span class="label">Horas</span>
        </div>
        <div class="time-box">
          <span class="number">{{ timeLeft.minutes }}</span>
          <span class="label">Minutos</span>
        </div>
        <div class="time-box">
          <span class="number">{{ timeLeft.seconds }}</span>
          <span class="label">Segundos</span>
        </div>
      </div>

      <p v-if="timeLeft.total <= 0" class="message">💍 ¡Hoy es el gran día! 💐</p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 🗓 Fecha de la boda
const weddingDate = new Date('2026-02-07T14:00:00').getTime()

// Estado reactivo del contador
const timeLeft = ref({
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00',
  total: 0,
})

// Función para actualizar el contador
const updateCountdown = () => {
  const now = new Date().getTime()
  const distance = weddingDate - now

  if (distance <= 0) {
    timeLeft.value = { days: '00', hours: '00', minutes: '00', seconds: '00', total: 0 }
    return
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)

  timeLeft.value = {
    days: String(days).padStart(2, '0'),
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0'),
    total: distance,
  }
}

// Inicia el contador en tiempo real
let timer = null
onMounted(() => {
  updateCountdown()
  timer = setInterval(updateCountdown, 1000)
})

// Limpieza del intervalo al desmontar
onUnmounted(() => clearInterval(timer))
</script>

<style scoped>
.section {
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
  text-align: center;
  scroll-snap-align: start;
  background: url('/src/assets/images/932A9870.jpg') no-repeat center center;
  background-size: cover;
  font-family: 'Poppins', sans-serif;
  color: #4b2e1f;
  opacity: 0;
  animation: fadeInBg 2s ease-out forwards;
}

@keyframes fadeInBg {
  to {
    opacity: 1;
  }
}

.countdown-container {
  background: rgba(255, 255, 255, 0.05);
  padding: 2.5rem 3rem;
  border-radius: 20px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
}

.title {
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #fff;
}

.date {
  font-size: 1.5rem;
  letter-spacing: 2px;
  margin-bottom: 2rem;
  color: #fff;
}

.timer {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.time-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80px;
}

.number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #d4791f;
}

.label {
  font-size: 0.9rem;
  color: #d4791f;
  text-transform: uppercase;
  margin-top: 0.25rem;
}

.message {
  margin-top: 2rem;
  font-size: 1.3rem;
  color: #fff;
  font-weight: 600;
}

/* 📱 Responsive */
@media (max-width: 768px) {
  .countdown-container {
    padding: 0.1rem;
  }

  .title {
    font-size: 2rem;
  }

  .timer {
    flex-wrap: wrap;
    gap: 0.2rem;
  }

  .number {
    font-size: 2rem;
  }
}
</style>
