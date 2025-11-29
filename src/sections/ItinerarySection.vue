<template>
  <section id="itinerary" class="section itinerary-section">
    <div class="timeline-container">
      <h2 class="title">Itinerario del gran día</h2>
      <div class="timeline">
        <div
          v-for="(event, index) in events"
          :key="index"
          :class="['timeline-item', index % 2 === 0 ? 'left' : 'right']"
        >
          <div class="content">
            <h3>{{ event.time }}</h3>
            <h4>{{ event.title }}</h4>
            <p>{{ event.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const events = [
  {
    time: '2:00 PM',
    title: 'Llegada de invitados',
    description: 'Recibimiento y bienvenida con bebidas refrescantes.',
  },
  {
    time: '3:00 PM',
    title: 'Ceremonia',
    description:
      'Un momento especial donde celebraremos nuestro amor frente a familiares y amigos.',
  },
  {
    time: '4:00 PM',
    title: 'Comida',
    description: 'Disfruta de una deliciosa comida preparada con mucho cariño.',
  },
  {
    time: '5:00 PM',
    title: 'Mesa de botanas',
    description: 'Disfruta de una deliciosa botana para continuar la fiesta.',
  },
  {
    time: 'Durante el día',
    title: 'Alberca, música y diversión',
    description: '¡A disfrutar y celebrar juntos. No olvides llevar tu traje de baño!',
  },
  {
    time: '10:00 PM',
    title: 'Despedida',
    description: 'Agradecemos haber compartido este día tan especial con nosotros.',
  },
]
</script>

<style scoped>
.section {
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 4rem 1rem;
  font-family: 'Poppins', sans-serif;
  scroll-snap-align: start;
  background: linear-gradient(to bottom right, #fff5e4, #ffe3c0);
}

/* Contenedor principal */
.timeline-container {
  width: 100%;
  max-width: 900px;
  position: relative;
}

/* Título */
.title {
  text-align: center;
  font-size: 2rem;
  color: #8b4513;
  margin-bottom: 3rem;
  letter-spacing: 1px;
}

/* Línea vertical central */
.timeline {
  position: relative;
  margin: 0 auto;
  padding: 2rem 0;
  width: 100%;
}

.timeline::after {
  content: '';
  position: absolute;
  width: 4px;
  background-color: #b5651d;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 2px;
}

/* Cada evento */
.timeline-item {
  position: relative;
  width: 50%;
  padding: 1rem 2rem;
  box-sizing: border-box;
}

.timeline-item.left {
  left: 0;
  text-align: right;
}

.timeline-item.right {
  left: 50%;
  text-align: left;
}

/* Conectores circulares */
.timeline-item::before {
  content: '';
  position: absolute;
  top: 20px;
  width: 20px;
  height: 20px;
  background-color: #b5651d;
  border: 3px solid #fff;
  border-radius: 50%;
  z-index: 1;
}

.timeline-item.left::before {
  right: -10px;
}

.timeline-item.right::before {
  left: -10px;
}

/* Contenido de las tarjetas */
.content {
  background-color: #fffdf9;
  padding: 1.2rem 1.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.content:hover {
  transform: translateY(-5px);
}

.content h3 {
  margin: 0;
  font-size: 1.2rem;
  color: #b5651d;
}

.content h4 {
  margin: 0.3rem 0;
  font-size: 1.1rem;
  color: #5a3825;
}

.content p {
  margin: 0.5rem 0 0;
  font-size: 0.95rem;
  color: #4b2e1f;
  line-height: 1.5;
}

/* 📱 Responsivo */
@media (max-width: 768px) {
  .timeline::after {
    left: 20px;
  }

  .timeline-item {
    width: 100%;
    padding-left: 3rem;
    padding-right: 1rem;
    text-align: left;
  }

  .timeline-item.left,
  .timeline-item.right {
    left: 0;
  }

  .timeline-item::before {
    left: 10px;
  }
}
</style>
