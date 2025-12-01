<template>
  <section class="cazuela-section">
    <div class="card">
      <h2>Información sobre la Cazuela</h2>

      <p class="intro">
        ¡Gracias por confirmar tu asistencia! Además, fuiste elegido para traer una
        <strong>cazuela especial</strong>
        para celebrar con nosotros como lo dicta la tradición familiar.
      </p>

      <button class="modal-btn" @click="showModal = true">Leer carta especial</button>

      <div class="info-box">
        <h3>¿Qué es una cazuela?</h3>
        <p>
          La cazuela es un platillo tradicional que forma parte de la comida principal del evento.
          Tu aportación es muy importante para completar esta tradición tan especial para nosotros.
        </p>
      </div>

      <div class="info-box">
        <h3>¿Qué debes hacer?</h3>
        <ul>
          <li>Esperar una sorpresa de nuestra parte. Pronto...</li>
          <li>Avisarnos que guiso elegiste para que no se repita.</li>
          <li>Preparar el guiso a tu elección.</li>
          <li>Entregarlo al llegar al evento en la mesa de comida.</li>
        </ul>
      </div>

      <p class="thanks">¡Gracias por ser parte de este detalle tan especial! ❤️</p>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="modal-overlay" @click.self="showModal = false">
      <div class="modal-content fade-in">
        <h3>Carta Especial</h3>

        <p>
          Querid@ {{ guestName }},<br /><br />
          Gracias por aceptar ser parte del detalle más especial de este día. La cazuela que
          prepararás representa unión, cariño y tradición. Estamos felices de compartir este momento
          contigo, y de que seas parte del sabor y la esencia del evento más importante para
          nosotros.
        </p>

        <p>Gracias por tu tiempo, por tu esfuerzo y por sumar a este día con tanto amor.</p>

        <p style="text-align: right; font-weight: bold; margin-top: 1rem">
          Con cariño,<br />
          Alan & Naomi 🤍
        </p>

        <button class="close-btn" @click="showModal = false">Cerrar</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
    }
  },
}
</script>

<script setup>
import { ref } from 'vue'

const showModal = ref(false)

const props = defineProps({
  guestName: {
    type: String,
    default: 'invitado',
  },
})
</script>

<style scoped>
.cazuela-section {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white url('https://www.transparenttextures.com/patterns/white-linen.png');
  background-size: 250px 250px;
  padding: 3rem 1.5rem;
  scroll-snap-align: start;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

/* Tarjeta principal */
.card {
  background: #fffefc;
  padding: 2.8rem 3rem;
  border-radius: 24px;
  max-width: 850px;
  width: 100%;
  box-shadow: 0 8px 22px #d4791f;
  text-align: center;
  backdrop-filter: blur(6px);
  animation: fadeIn 0.6s ease-in-out;
}

.card h2 {
  font-size: 2rem;
  color: #000;
  margin-bottom: 1rem;
  font-weight: 600;
}

.intro {
  font-size: 1.15rem;
  color: #000;
  margin-bottom: 2rem;
  line-height: 1.6;
}

/* Cajas de información */
.info-box {
  background: #fffefc;
  padding: 1.4rem 1.5rem;
  border-radius: 18px;
  margin-bottom: 1.8rem;
  text-align: left;
  border: 1px solid #fffefc;
  box-shadow: 0 8px 22px #efae6d;
}

.info-box h3 {
  font-size: 1.3rem;
  color: #d4791f;
  margin-bottom: 0.7rem;
}

.info-box ul {
  color: #000;
  padding-left: 1.5rem;
  line-height: 1.6;
}

/* Botón del modal */
.modal-btn {
  margin-top: 1rem;
  margin-bottom: 2rem;
  background: #ffe0c3;
  color: #000;
  padding: 0.9rem 1.6rem;
  border-radius: 14px;
  font-weight: 600;
  border: 2px solid #f2c7a5;
  cursor: pointer;
  font-size: 1.05rem;
  transition: 0.3s ease;
}

.modal-btn:hover {
  background: #ffd2ac;
  transform: translateY(-3px);
}

.thanks {
  margin-top: 1.8rem;
  color: #d4791f;
  font-weight: bold;
  font-size: 1.1rem;
}

/* ————————————————
   MODAL
——————————————— */

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(3px);
  padding: 1.5rem;
  z-index: 40;
}

.modal-content {
  background: #fffdf9;
  width: min(500px, 90%);
  padding: 2rem 2.2rem;
  border-radius: 22px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  animation: fadeIn 0.4s ease-out;
}

.modal-content h3 {
  text-align: center;
  color: #d4791f;
  margin-bottom: 1rem;
  font-size: 1.6rem;
}

.modal-content p {
  color: #000;
  line-height: 1.55;
  font-size: 1.05rem;
}

/* Botón cerrar */
.close-btn {
  width: 100%;
  margin-top: 1.5rem;
  padding: 0.8rem;
  background: #ffe5d0;
  border: 2px solid #f2c7a5;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s ease;
  text-align: center;
}

.close-btn:hover {
  background: #ffd8b9;
}

/* Animación fade */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 📱 Responsive */
@media (max-width: 768px) {
  .card {
    padding: 2.2rem 1.7rem;
  }

  .modal-content {
    padding: 1.6rem;
  }
}
</style>
