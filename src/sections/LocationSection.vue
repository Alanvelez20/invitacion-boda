<template>
  <section id="location" class="section location-section">
    <div class="location-container">
      <h2 class="title">¿Cuándo y Dónde?</h2>

      <div class="details">
        <div class="card">
          <h3>Fecha</h3>
          <p class="highlight">Sábado, 7 de Febrero de 2026</p>
        </div>

        <div class="card">
          <h3>Hora</h3>
          <p class="highlight">Recepción: 2:00 PM</p>
          <p>Ceremonia y evento</p>
        </div>

        <div class="card">
          <h3>Lugar</h3>
          <p class="highlight">Salón de eventos Mirela</p>
          <p>Azcapotzalco 327, San Pedrito, Tlaquepaque, Jalisco</p>
        </div>
      </div>

      <div class="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.5929284118447!2d-103.28661168888446!3d20.604675130861192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b3ac98085b93%3A0xc7844c037e6cea04!2sSalon%20de%20Eventos%20Mirela!5e0!3m2!1ses!2smx!4v1763925445788!5m2!1ses!2smx"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  scroll-snap-align: start;
  background: linear-gradient(to bottom right, #fff5eb, #ffe7cc);
  padding: 4rem 1rem;
  box-sizing: border-box;
}

.location-container {
  text-align: center;
  width: 100%;
  max-width: 900px;
  background: rgba(255, 255, 255, 0.88);
  border-radius: 20px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  padding: 3rem 2rem;
}

.title {
  font-size: 2rem;
  color: #8b4513;
  margin-bottom: 2rem;
}

.details {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.card {
  flex: 1 1 250px;
  background: #fffdf9;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card h3 {
  color: #b5651d;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.card p {
  color: #4b2e1f;
  margin: 0.3rem 0;
  font-size: 0.95rem;
}

.highlight {
  font-weight: 600;
  color: #8b4513;
}

/* Contenedor del mapa */
.map-container {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
}

.map-container iframe {
  width: 100%;
  height: 400px;
  border: 0;
  display: block;
}

/* 📱 Responsivo */
@media (max-width: 768px) {
  .details {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 90%;
  }

  .map-container iframe {
    height: 300px;
  }
}
</style>
