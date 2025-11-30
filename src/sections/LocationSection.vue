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
    </div>
  </section>
</template>

<style scoped>
.section {
  width: 100%;
  background: #ffffff;
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
    padding: 2rem 1.6rem;
  }

  .map-wrapper iframe {
    height: 320px;
  }
}
</style>
