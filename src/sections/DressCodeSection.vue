<template>
  <section id="dresscode" class="section dresscode-section">
    <div class="dresscode-container">
      <h2 class="title">Código de Vestimenta</h2>

      <p class="subtitle">Formal Casual</p>
      <p class="note">
        Queremos que te sientas cómodo, fresco y luzcas increíble en este día tan especial.
      </p>
      <p class="note highlight">
        <b>¡Traje de baño <u>¡INDISPENSABLE!</u></b>
      </p>

      <div class="dresscode-grid">
        <!-- Mujeres -->
        <div class="card">
          <img src="https://cdn-icons-png.flaticon.com/512/949/949625.png" alt="Mujer elegante" />
          <h3>Mujeres</h3>
          <p class="main-text">Recomendación: colores pastel suaves</p>
          <p class="main-text">Evitar <u style="color: red">BLANCO, BEIGE y NEGRO</u></p>
        </div>

        <!-- Hombres -->
        <div class="card">
          <img src="https://cdn-icons-png.flaticon.com/512/949/949626.png" alt="Hombre elegante" />
          <h3>Hombres</h3>
          <p class="main-text">Recomendación: tonos claros.</p>
          <p class="main-text">Evitar <u style="color: red">BLANCO, BEIGE y NEGRO</u></p>
        </div>
      </div>

      <div class="palette">
        <h4>Colores sugeridos</h4>
        <p>Tonos pastel</p>

        <!-- Primera fila -->
        <div class="colors">
          <span class="color" style="background: #fde2f3"></span>
          <!-- rosa pastel frío -->
          <span class="color" style="background: #e3d5ff"></span>
          <!-- lavanda pastel -->
          <span class="color" style="background: #c8e7ff"></span>
          <!-- azul celeste pastel -->
          <span class="color" style="background: #d2f8e2"></span>
          <!-- verde menta pastel -->
          <span class="color" style="background: #ffe0f0"></span>
          <!-- rosa algodón dulce -->
        </div>

        <!-- Segunda fila -->
        <div class="colors">
          <span class="color" style="background: #ffd4e5"></span>
          <!-- rosado chicle pastel -->
          <span class="color" style="background: #d7f3ff"></span>
          <!-- azul hielo pastel -->
          <span class="color" style="background: #daf5d7"></span>
          <!-- verde leche almendra pastel -->
          <span class="color" style="background: #e9d7ff"></span>
          <!-- púrpura nube pastel -->
          <span class="color" style="background: #ffe1fb"></span>
          <!-- magenta suave pastel -->
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  width: 100%;
  min-height: 100vh;
  padding: 6rem 1rem;
  display: flex;
  justify-content: center;
  scroll-snap-align: start;
  font-family: 'Poppins', sans-serif;
}

.dresscode-section {
  background: white url('https://www.transparenttextures.com/patterns/white-linen.png');
  background-size: 250px 250px;
}

/* CONTENEDOR PRINCIPAL */
.dresscode-container {
  width: 100%;
  max-width: 900px;
  background: #fffefc;
  border-radius: 20px;
  padding: 4rem 2.5rem;
  text-align: center;
  box-shadow: 0 6px 18px #d4791f;
  backdrop-filter: blur(8px);
}

/* TITULO */
.title {
  font-size: 2.6rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 0.8rem;
}

.subtitle {
  font-size: 1.4rem;
  color: #d4791f;
  margin-bottom: 1.5rem;
}

.note {
  font-size: 1.05rem;
  color: #000;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.note.highlight {
  color: #d4791f;
  font-size: 1.2rem;
}

/* GRID DE TARJETAS */
.dresscode-grid {
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  margin: 3rem 0;
  flex-wrap: wrap;
}

/* TARJETAS */
.card {
  background: #fffdf8;
  padding: 2rem;
  border-radius: 18px;
  width: 280px;
  box-shadow: 0 5px 14px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-7px);
}

.card img {
  width: 90px;
  margin-bottom: 1rem;
}

.card h3 {
  color: #d4791f;
  font-size: 1.4rem;
  margin-bottom: 0.6rem;
}

.main-text {
  font-size: 1.1rem;
  font-weight: 600;
  color: #000;
}

.sub-text {
  font-size: 1rem;
  color: #000;
}

/* PALETA DE COLORES */
.palette h4 {
  font-size: 1.4rem;
  color: #d4791f;
  margin-bottom: 1rem;
}

.palette {
  margin-top: 1rem;
  text-align: center;
}

.colors {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 10px 0;
}

.color {
  width: 35px;
  height: 35px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

/* RESPONSIVO */
@media (max-width: 768px) {
  .dresscode-container {
    margin-left: -5%;
    padding: 3rem 1.5rem;
    width: 80%;
  }

  .title {
    font-size: 2.2rem;
  }

  .dresscode-grid {
    gap: 1.8rem;
  }

  .card {
    width: 100%;
  }
}
</style>
