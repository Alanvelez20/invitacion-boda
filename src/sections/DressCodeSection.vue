<template>
  <section id="dresscode" class="section dresscode-section">
    <div class="dresscode-container">
      <h2 class="title">Código de Vestimenta</h2>
      <p class="subtitle">Formal Casual</p>
      <p class="note">Queremos que te sientas cómodo y luzcas increíble en este día tan especial</p>
      <b><p class="note">¡LLevar traje de baño indispendable!</p></b>

      <div class="dresscode-grid">
        <div class="card">
          <img src="https://cdn-icons-png.flaticon.com/512/949/949625.png" alt="Mujer elegante" />
          <h3>Mujeres</h3>
          <p>¡Llevar colores pastel!</p>
          <p>Evitar colores blanco, beige y negro.</p>
        </div>

        <div class="card">
          <img src="https://cdn-icons-png.flaticon.com/512/949/949626.png" alt="Hombre elegante" />
          <h3>Hombres</h3>
          <p>¡Llevar colores pastel!</p>
          <p>Evitar colores blanco, beige y negro.</p>
        </div>
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
  transition: background 0.5s ease;
  padding: 3rem 1.5rem;
  box-sizing: border-box;
}

.dresscode-section {
  background: linear-gradient(to bottom right, #ffe5c0, #ffd5a3);
}

.dresscode-container {
  text-align: center;
  background: rgba(255, 255, 255, 0.9);
  padding: 3rem 2rem;
  border-radius: 20px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  width: 100%;
}

.title {
  font-size: 2rem;
  color: #8b4513;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.2rem;
  color: #a66a2e;
  margin-bottom: 1rem;
}

.note {
  color: #5a3d2b;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}

.dresscode-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.card {
  background: #fffdf9;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  width: 250px;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card img {
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
}

.card h3 {
  color: #b5651d;
  margin-bottom: 0.5rem;
}

.card p {
  color: #4b2e1f;
  font-size: 0.9rem;
}

/* Paleta de colores */
.palette {
  margin-top: 1.5rem;
}

.palette h4 {
  color: #8b4513;
  margin-bottom: 1rem;
}

.colors {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
}

.color {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  border: 2px solid #fff;
}

/* 📱 Responsivo */
@media (max-width: 768px) {
  .dresscode-grid {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 90%;
  }
}
</style>
