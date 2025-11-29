<template>
  <section id="rsvp" class="section rsvp-section">
    <div class="rsvp-container">
      <h2 class="title">Confirmación de asistencia</h2>
      <p class="subtitle">Busca tu nombre para confirmar tu asistencia</p>

      <!-- BUSCADOR -->
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Escribe tu nombre completo..."
        class="search-box"
      />

      <!-- TARJETA DEL INVITADO -->
      <div v-if="filteredGuest" class="guest-card">
        <p class="guest-name">
          ¿Asistirá <strong>{{ filteredGuest.invitado }}</strong
          >?
        </p>

        <!-- SI TIENE CAZUELA -->
        <p v-if="filteredGuest.cazuela === true" class="cazuela-msg">
          🍲 Esta invitación incluye cazuela.
          <span class="cazuela-small">(Te explicaremos más adelante en una sección especial)</span>
        </p>

        <!-- BOTONES -->
        <div class="buttons">
          <button class="btn yes" @click="confirmAttendance(true)">Sí asistiré 💖</button>
          <button class="btn no" @click="confirmAttendance(false)">No podré asistir 💔</button>
        </div>

        <!-- FORMULARIO DE ACOMPAÑANTES -->
        <div v-if="isComing && filteredGuest.personas > 1" class="companions-box">
          <p class="companions-title">
            Confirma los nombres de tus {{ filteredGuest.personas - 1 }} acompañantes:
          </p>

          <div v-for="(name, index) in companions" :key="index" class="companion-input">
            <input
              v-model="companions[index]"
              :placeholder="`Acompañante ${index + 1}`"
              class="input"
            />
          </div>

          <button class="submit-btn" @click="submitCompanions">Confirmar asistencia ✨</button>
        </div>
      </div>

      <!-- NO ENCONTRADO -->
      <p v-else-if="searchQuery && !filteredGuest" class="not-found">
        No se encontró ningún invitado con ese nombre 😢
      </p>

      <!-- MENSAJE FINAL -->
      <p v-if="confirmationMessage" class="confirmation">{{ confirmationMessage }}</p>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const excelData = [
  // Simulación de tu Excel (ya cargado)
  // Reemplazaremos esto con la lectura real en backend
  { invitado: 'Fernando Vélez Sánchez', personas: 1, cazuela: false },
  { invitado: 'Alejandro Vélez Gómez', personas: 3, cazuela: true },
  { invitado: 'Rogelio Vélez Gómez', personas: 2, cazuela: false },
  { invitado: 'María del Socorro Vital Sustaita', personas: 4, cazuela: false },
]

const searchQuery = ref('')
const confirmationMessage = ref('')
const isComing = ref(false)
const companions = ref([])
const emit = defineEmits(['cazuela'])

const filteredGuest = computed(() => {
  if (!searchQuery.value) return null
  return excelData.find((g) =>
    g.invitado.toLowerCase().includes(searchQuery.value.trim().toLowerCase()),
  )
})

watch(filteredGuest, (newGuest, oldGuest) => {
  // Resetea estado cuando cambia el invitado seleccionado
  companions.value = []
  isComing.value = false
  confirmationMessage.value = ''
})

const confirmAttendance = (coming) => {
  isComing.value = coming

  // ✦ Si el invitado NO va, cancelamos y ocultamos sección de cazuela
  if (!coming) {
    confirmationMessage.value = `Lamentamos que no puedas venir`
    emit('cazuela', false)
    return
  }

  // ✦ Lógica de cuando SÍ va a asistir
  if (filteredGuest.value.personas === 1) {
    confirmationMessage.value = `¡Gracias por confirmar! Nos vemos pronto`
  } else {
    // Crear inputs para acompañantes
    companions.value = Array(filteredGuest.value.personas - 1).fill('')
  }

  // ✦ MOSTRAR sección de cazuela si aplica
  if (filteredGuest.value.cazuela === true) {
    emit('cazuela', true)
  } else {
    emit('cazuela', false)
  }
}

const submitCompanions = () => {
  const filled = companions.value.every((c) => c.trim() !== '')

  if (!filled) {
    confirmationMessage.value = 'Por favor completa todos los nombres'
    return
  }

  confirmationMessage.value = `¡Asistencia confirmada!`
}
</script>

<style scoped>
.section {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  scroll-snap-align: start;
  background: linear-gradient(to bottom, #ffe4c4, #ffdcb2);
}

.rsvp-container {
  background: rgba(255, 255, 255, 0.9);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  text-align: center;
  width: 90%;
  max-width: 500px;
}

.title {
  font-size: 2rem;
  color: #8b4513;
  margin-bottom: 0.5rem;
}

.subtitle {
  margin-bottom: 1.5rem;
  font-size: 1rem;
}

.search-box,
.input {
  width: 100%;
  padding: 0.8rem 1rem;
  border-radius: 10px;
  border: 1px solid #d4a373;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.guest-name {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.cazuela-msg {
  background: #fff7e6;
  padding: 0.7rem;
  border-radius: 8px;
  color: #5a3e1b;
  font-weight: 500;
  margin-bottom: 1rem;
}

.cazuela-small {
  font-size: 0.8rem;
  opacity: 0.8;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.btn {
  padding: 0.7rem 1.4rem;
  border-radius: 8px;
  color: white;
  cursor: pointer;
}

.btn.yes {
  background: #ffb347;
}
.btn.no {
  background: #b56576;
}

.companions-box {
  margin-top: 1.5rem;
  text-align: left;
}

.submit-btn {
  width: 100%;
  padding: 0.9rem;
  background: #ffb347;
  border-radius: 10px;
  color: white;
  margin-top: 1rem;
  cursor: pointer;
  font-size: 1rem;
}

.confirmation {
  margin-top: 1.5rem;
  font-size: 1.1rem;
  font-weight: 600;
}
</style>
