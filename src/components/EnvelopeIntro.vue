<template>
  <div class="intro-container">
    <!-- SOBRE CERRADO -->
    <div v-if="!opened" class="envelope-wrapper" @click="openEnvelope">
      <img class="envelope" src="/src/assets/images/envelope-closed-1.png" alt="Sobre cerrado" />
      <p class="hint">Abre nuestro sobre</p>
    </div>

    <!-- ESCENA ABIERTA -->

    <div v-else class="envelope-open-wrapper">
      <img class="envelope-open" src="/src/assets/images/envelope-open-1.png" alt="Sobre abierto" />

      <!-- CARTA Y FOTOS SALIENDO DEL SOBRE -->
      <div class="content-layer">
        <img class="photo left" src="/src/assets/images/polaroid.png" alt="Foto izquierda" />
        <img class="photo right" src="/src/assets/images/polaroid.png" alt="Foto derecha" />
        <img
          class="letter"
          src="/src/assets/images/letter.jpg"
          alt="Carta"
          @click="$emit('openInvitation')"
        />
        <p class="hint">¿Que dirá la carta? (haz clic)</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const opened = ref(false)

const openEnvelope = () => {
  const envelope = document.querySelector('.envelope')
  envelope.classList.add('open-animation')

  // Esperamos a que termine la animación de apertura
  setTimeout(() => {
    opened.value = true
  }, 1000)
}
</script>

<style scoped>
/* CONTENEDOR PRINCIPAL */
.intro-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to bottom right, #ffecd9, #ffe8d6);
  overflow: hidden;
  flex-direction: column;
}

/* --- SOBRE CERRADO --- */
.envelope-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.envelope {
  width: 80%;
  transition:
    transform 1s ease,
    opacity 0.8s ease;
}

.envelope.open-animation {
  transform: rotateX(160deg) scale(0.85);
  opacity: 0;
}

.hint {
  margin-top: 20px;
  font-size: 1.1rem;
  color: #6b4a2b;
  font-style: italic;
  opacity: 0.8;
  animation: fadeInHint 1.5s ease-in-out infinite alternate;
}

@keyframes fadeInHint {
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
}

/* --- SOBRE ABIERTO DE FONDO --- */
.envelope-open-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.envelope-open {
  width: 40%;
  position: relative;
  z-index: 1;
  bottom: 0;
}

/* --- CONTENIDO QUE SALE DEL SOBRE --- */
.content-layer {
  position: absolute;
  bottom: 40%; /* punto exacto donde inicia el contenido (ajústalo según tu imagen de sobre abierto) */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 60%; /* área de movimiento de fotos y carta */
  z-index: 2;
  pointer-events: none; /* evita interferencia con clics salvo en la carta */
}

/* FOTOS POLAROID */
.photo {
  position: absolute;
  bottom: -5%;
  width: 200px;
  border: 5px solid white;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
  opacity: 0;
  transform-origin: bottom center;
  animation: slideFromEnvelope 1.3s ease forwards;
}

.photo.left {
  left: calc(50% - 20%);
  transform: rotate(-10deg);
  animation-delay: 0.4s;
}

.photo.right {
  right: calc(50% - 30%);
  transform: rotate(10deg) translateY(80px);
  animation-delay: 0.6s;
}

/* CARTA CENTRAL */
.letter {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 80px); /* parte desde dentro del sobre */
  width: 80%;
  max-width: 20%;
  cursor: pointer;
  opacity: 0;
  animation: slideFromEnvelope 1.3s ease forwards;
  animation-delay: 0.8s;
  transition: transform 0.3s ease;
  pointer-events: auto; /* activa clic en la carta */
}

.letter:hover {
  transform: translate(-50%, 20px) scale(1.05);
}

/* --- ANIMACIONES --- */
@keyframes slideFromEnvelope {
  from {
    opacity: 0;
    transform: translate(-50%, 80px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -10px) scale(1);
  }
}

/* TABLETS (pantallas medianas) */
@media (max-width: 992px) {
  .envelope {
    width: 100%;
  }

  .envelope-open {
    width: 100%;
  }

  .photo {
    bottom: -20%;
    width: 30vw;
    border: 2vw solid white;
  }
  .photo.left {
    left: calc(50% - 20%);
    transform: rotate(-8deg);
  }

  .photo.right {
    right: calc(50% - 55%);
    transform: rotate(8deg);
  }

  .letter {
    bottom: 10%;
    width: 350px;
    max-width: 350px;
    transform: translate(-50%, 8vh);
  }

  .hint {
    font-size: 1rem;
  }
}

/* CELULARES (pantallas pequeñas) */
@media (max-width: 600px) {
  .envelope {
    width: 100%;
  }

  .envelope-open {
    width: 100%;
  }

  .photo {
    bottom: -20%;
    width: 30vw;
    border: 2vw solid white;
  }

  .photo.left {
    left: calc(50% - 20%);
    transform: rotate(-8deg);
  }

  .photo.right {
    right: calc(50% - 55%);
    transform: rotate(8deg);
  }

  .letter {
    bottom: 10%;
    width: 250px;
    max-width: 250px;
    transform: translate(-50%, 8vh);
  }

  .hint {
    font-size: 0.9rem;
  }
}
</style>
