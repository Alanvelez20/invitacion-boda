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
  padding: 6rem 1rem;
  scroll-snap-align: start;
  background: white url('https://www.transparenttextures.com/patterns/white-linen.png');
  background-size: 250px 250px;
  font-family: 'Poppins', sans-serif;
}

/* Contenedor */
.timeline-container {
  width: 100%;
  max-width: 800px;
  text-align: center;
}

/* Título */
.title {
  font-size: 2.6rem;
  font-weight: 600;
  color: #000;
  letter-spacing: 1px;
  margin-bottom: 3rem;
}

/* Línea central */
.timeline {
  position: relative;
  margin: 0 auto;
  padding: 1rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  width: 3px;
  background: #d4791f;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 2px;
}

/* Evento */
.timeline-item {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 2.5rem 0;
  position: relative;
}

/* Punto circular */
.timeline-item::before {
  content: '';
  position: absolute;
  top: 0;
  width: 18px;
  height: 18px;
  background: #d4791f;
  border: 3px solid white;
  border-radius: 50%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

/* Caja */
.content {
  background: #fffefc;
  padding: 1.8rem 2rem;
  border-radius: 20px;
  width: 75%;
  box-shadow: 0 6px 14px #d4791f;
  transform: translateY(10px);
  transition: all 0.3s ease;
}

.content:hover {
  transform: translateY(3px);
}

/* Textos */
.content h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #d4791f;
  margin-bottom: 0.4rem;
}

.content h4 {
  font-size: 1.2rem;
  margin-bottom: 0.4rem;
  color: #000;
}

.content p {
  font-size: 1rem;
  color: #000;
  line-height: 1.6;
}

/* 📱 RESPONSIVE */
@media (max-width: 768px) {
  .title {
    font-size: 1.8rem;
  }

  .content {
    width: 80%;
    padding: 0rem;
  }

  .timeline::before {
    width: 2px;
  }
}
</style>
