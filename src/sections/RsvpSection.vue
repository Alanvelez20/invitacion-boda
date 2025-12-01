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
          Esta invitación incluye cazuela.
          <span class="cazuela-small">(Te explicaremos más adelante en una sección especial)</span>
        </p>

        <!-- BOTONES -->
        <div class="buttons">
          <button class="btn yes" @click="confirmAttendance(true)">Sí asistiré</button>
          <button class="btn no" @click="confirmAttendance(false)">No podré asistir</button>
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

          <button class="submit-btn" @click="submitCompanions">Confirmar asistencia</button>
        </div>
      </div>

      <!-- NO ENCONTRADO -->
      <p v-else-if="searchQuery && !filteredGuest" class="not-found">
        No se encontró ningún invitado con ese nombre
      </p>

      <!-- MENSAJE FINAL -->
      <p v-if="confirmationMessage" class="confirmation">{{ confirmationMessage }}</p>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const excelData = [
  { invitado: 'Laura Eugenia Gómez García', personas: 1, cazuela: true },
  { invitado: 'Fernando Vélez Sánchez', personas: 1, cazuela: false },
  { invitado: 'Alejandro Vélez Gómez', personas: 1, cazuela: false },
  { invitado: 'Laura Pérez Flores', personas: 3, cazuela: false },
  { invitado: 'Rogelio Vélez Gómez', personas: 2, cazuela: true },
  { invitado: 'Sergio Vélez Sánchez', personas: 1, cazuela: false },
  { invitado: 'Leopoldo Vélez Sánchez', personas: 1, cazuela: false },
  { invitado: 'Alejandro Quiñonez', personas: 2, cazuela: false },
  { invitado: 'Oscar Iván Partida Casillas', personas: 2, cazuela: false },
  { invitado: 'Ramón Parra Galindo (Samy)', personas: 1, cazuela: false },
  { invitado: 'Luis Gerardo Olivares Ibarra', personas: 2, cazuela: false },
  { invitado: 'Carlos Alberto Gutierrez Dominguez', personas: 2, cazuela: false },
  { invitado: 'Misael Mundo Segura (Makoto)', personas: 1, cazuela: false },
  { invitado: 'Jose Rafael Alvarez', personas: 1, cazuela: false },
  { invitado: 'Luis Gerardo Ramos', personas: 1, cazuela: false },
  { invitado: 'Diego Alejandro Mercado Camargo', personas: 1, cazuela: true },
  { invitado: 'Sebastián D Rugama', personas: 2, cazuela: false },
  { invitado: 'María del Socorro Vital Sustaita', personas: 1, cazuela: true },
  { invitado: 'Leomar Jazaro Estrada Vital', personas: 2, cazuela: false },
  { invitado: 'Maya Stephania Estrada Vital', personas: 2, cazuela: false },
  { invitado: 'Soledad Vital Sustaita', personas: 2, cazuela: true },
  { invitado: 'Manuel de Jesús Cerda Vital', personas: 2, cazuela: false },
  { invitado: 'Karla Gabriela Cerda Vital', personas: 5, cazuela: true },
  { invitado: 'Gabriela Vital Sustaita', personas: 1, cazuela: true },
  { invitado: 'Cesar Gabriel Rodriguez Vital', personas: 1, cazuela: false },
  { invitado: 'Enrique Vital Sustaita', personas: 1, cazuela: false },
  { invitado: 'Rafael Vital ', personas: 3, cazuela: false },
  { invitado: 'Samuel Vital', personas: 1, cazuela: false },
  { invitado: 'Abraham Vital', personas: 1, cazuela: false },
  { invitado: 'Josefina De la Cruz (mima)', personas: 2, cazuela: true },
  { invitado: 'Karla Martinez', personas: 1, cazuela: false },
  { invitado: 'Nayeli Campos', personas: 3, cazuela: false },
  { invitado: 'María tapia nuñez', personas: 3, cazuela: false },
  { invitado: 'Christian Alexis Zaragoza García', personas: 2, cazuela: false },
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

const confirmAttendance = async (coming) => {
  isComing.value = coming

  // ✦ Si el invitado NO va, cancelamos y ocultamos sección de cazuela
  if (!coming) {
    confirmationMessage.value = `Lamentamos que no puedas venir. ¡Nos habría encantado contar con tu presencia!`
    await sendToSheets({
      invitado: filteredGuest.value.invitado,
      acompanantes: '[]',
      personasConfirmadas: 0,
      cazuela: filteredGuest.value.cazuela ? 'true' : 'false',
      comentario: 'No asistirá',
    })
    emit('cazuela', false)
    return
  }

  // ✦ Lógica de cuando SÍ va a asistir
  if (filteredGuest.value.personas === 1) {
    confirmationMessage.value = `¡Gracias por confirmar! Nos vemos pronto`

    await sendToSheets({
      invitado: filteredGuest.value.invitado,
      acompanantes: '[]',
      personasConfirmadas: 1,
      cazuela: filteredGuest.value.cazuela ? 'true' : 'false',
      comentario: 'Asistirá solo',
    })

    // ✦ MOSTRAR sección de cazuela si aplica
    if (filteredGuest.value.cazuela === true) {
      emit('cazuela', { show: true, name: filteredGuest.value.invitado })
    } else {
      emit('cazuela', false)
    }

    return // IMPORTANTE
  } else {
    // Crear inputs para acompañantes
    companions.value = Array(filteredGuest.value.personas - 1).fill('')
    // ✦ MOSTRAR cazuela SI APLICA aunque tenga acompañantes
    if (filteredGuest.value.cazuela === true) {
      emit('cazuela', { show: true, name: filteredGuest.value.invitado })
    } else {
      emit('cazuela', false)
    }
  }
}

const sendToSheets = async (data) => {
  const body = new URLSearchParams(data).toString()

  try {
    const res = await fetch(
      'https://script.google.com/macros/s/AKfycbw__E_Z1ft0Ip30y7eqRKSP6LQZjVAW152cF7ourwlT-rpyw97brm5Zvkn6z5o5g3fm/exec',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body,
      },
    )

    const json = await res.json()

    if (!json.ok) {
      console.warn('Google Sheets respondió error:', json)
    }
  } catch (err) {
    console.error('Error al enviar a Google Sheets:', err)
  }
}

const submitCompanions = async () => {
  // Filtrar únicamente los nombres escritos (evita guardar vacíos)
  const validCompanions = companions.value.filter((c) => c.trim() !== '')

  const totalDisponibles = filteredGuest.value.personas - 1
  const totalConfirmados = validCompanions.length

  // Mensajes dinámicos
  if (totalConfirmados === 0) {
    confirmationMessage.value = `¡Asistencia confirmada! Irás solo(a).`
  } else if (totalConfirmados === 1) {
    confirmationMessage.value = `¡Asistencia confirmada! Asistirás con 1 acompañante.`
  } else if (totalConfirmados === totalDisponibles) {
    confirmationMessage.value = `¡Asistencia confirmada! Asistirás con tus ${totalConfirmados} acompañantes.`
  } else {
    confirmationMessage.value = `¡Asistencia confirmada! Asistirás con ${totalConfirmados} acompañantes (de ${totalDisponibles} posibles).`
  }

  console.log('Acompañantes confirmados:', validCompanions)

  const payload = {
    invitado: filteredGuest.value.invitado,
    acompanantes: JSON.stringify(validCompanions), // lo mandamos como string
    personasConfirmadas: isComing.value ? validCompanions.length + 1 : 0,
    cazuela: filteredGuest.value.cazuela ? 'true' : 'false',
    comentario: confirmationMessage.value || '',
  }

  // Form-encoded (no preflight)
  const body = new URLSearchParams(payload).toString()

  try {
    const res = await fetch(
      'https://script.google.com/macros/s/AKfycbw__E_Z1ft0Ip30y7eqRKSP6LQZjVAW152cF7ourwlT-rpyw97brm5Zvkn6z5o5g3fm/exec',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body,
      },
    )

    const json = await res.json()
    if (json && json.ok) {
      confirmationMessage.value = confirmationMessage.value + ' (Guardado correctamente)'
    } else {
      console.warn('Google Script respondió:', json)
    }
  } catch (err) {
    console.error('Error al enviar a Google Sheets:', err)
    confirmationMessage.value =
      confirmationMessage.value + ' (No se pudo guardar — intenta de nuevo)'
  }
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
  background: white url('https://www.transparenttextures.com/patterns/white-linen.png');
  background-size: 250px 250px;
  padding: 2.5rem 1rem;
}

/* Contenedor principal */
.rsvp-container {
  background: #fffefc;
  padding: 2.8rem 2.4rem;
  border-radius: 24px;
  border: 1px solid #d4791f;
  text-align: center;
  width: 100%;
  max-width: 550px;
  backdrop-filter: blur(6px);
  animation: fadeIn 0.6s ease;
}

.title {
  font-size: 2rem;
  color: #000;
  font-weight: 600;
  margin-bottom: 0.4rem;
}

.subtitle {
  margin-bottom: 1.8rem;
  font-size: 1.05rem;
  color: #000;
}

/* Buscador */
.search-box,
.input {
  width: 95%;
  padding: 0.9rem;
  border-radius: 14px;
  border: 1px solid #d4791f;
  background: #fffefc;
  font-size: 1rem;
  margin-bottom: 1rem;
  transition: 0.2s ease;
}

.search-box:focus,
.input:focus {
  outline: none;
  border-color: #d4791f;
  box-shadow: 0 0 0 3px #efae6d;
}

.guest-card {
  margin-top: 1.2rem;
  background: #fffefc;
  padding: 1.7rem 1.4rem;
  border-radius: 20px;
  border: 1px solid #d4791f;
  text-align: left;
}

.guest-name {
  font-size: 1.2rem;
  margin-bottom: 0.9rem;
  color: #000;
}

/* Mensaje cazuela */
.cazuela-msg {
  background: #fff2e4;
  padding: 0.9rem 1rem;
  border-radius: 12px;
  color: #000;
  font-weight: 500;
  border: 1px solid #f1dac2;
  margin-bottom: 1rem;
}

.cazuela-small {
  display: block;
  font-size: 0.8rem;
  opacity: 0.8;
}

/* Botones SI / NO */
.buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.btn {
  padding: 0.8rem 1.6rem;
  border-radius: 14px;
  cursor: pointer;
  border: 1px solid #e7c7b0;
  font-weight: 600;
  transition: 0.25s ease;
}

/* Tonos suaves pastel */
.btn.yes {
  background: #ffe0c3;
  color: #000;
}
.btn.yes:hover {
  background: #ffd2ac;
  transform: translateY(-3px);
}

.btn.no {
  background: #ffe0c3;
  color: #000;
}
.btn.no:hover {
  background: #ffd2ac;
  transform: translateY(-3px);
}

/* Acompañantes */
.companions-box {
  margin-top: 1.5rem;
}

.companions-title {
  font-size: 1.05rem;
  color: #000;
  margin-bottom: 0.8rem;
}

.companion-input .input {
  margin-bottom: 0.8rem;
}

/* Botón enviar */
.submit-btn {
  width: 100%;
  padding: 0.9rem;
  background: #ffe0c3;
  border-radius: 14px;
  border: 1px solid #ffd2ac;
  color: #000;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: 0.25s ease;
}

.submit-btn:hover {
  background: #ffd2ac;
  transform: translateY(-3px);
}

/* Mensajes */
.not-found,
.confirmation {
  margin-top: 1.2rem;
  font-size: 1.05rem;
  font-weight: 600;
  color: #000;
}

/* Animación */
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

/* Responsive */
@media (max-width: 768px) {
  .rsvp-container {
    padding: 2.2rem 1.6rem;
  }
}
</style>
