<template>
  <section class="cazuela-section">
    <div class="card">
      <h2>🌾 Información sobre la Cazuela</h2>

      <p class="intro">
        ¡Gracias por confirmar tu asistencia! 🙌 Además, fuiste elegido para traer una
        <strong>cazuela especial</strong>
        para celebrar con nosotros como lo dicta la tradición familiar.
      </p>

      <div class="info-box">
        <h3>¿Qué es una cazuela?</h3>
        <p>
          La cazuela es un platillo tradicional que forma parte de la comida principal del evento.
          Tu aportación es muy importante para completar esta tradición tan especial para nosotros.
        </p>
      </div>

      <div class="info-box">
        <h3>¿Qué debes llevar?</h3>
        <ul>
          <li>Una cazuela de barro o recipiente grande.</li>
          <li>Preparada como normalmente la haces (o como se te indicó previamente).</li>
          <li>Entregarla al llegar al evento en la mesa de organización.</li>
        </ul>
      </div>

      <p class="thanks">¡Gracias por ser parte de este detalle tan especial! ❤️</p>
    </div>
  </section>
</template>

<style scoped>
.cazuela-section {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff3e2;
  padding: 2rem;
}

.card {
  background: #ffffff;
  padding: 2rem;
  border-radius: 20px;
  max-width: 600px;
  width: 95%;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h2 {
  color: #8b4513;
  margin-bottom: 1rem;
}

.intro {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #5a3825;
}

.info-box {
  background: #fff7ef;
  padding: 1rem;
  border-radius: 14px;
  margin-bottom: 1.5rem;
  text-align: left;
}

.info-box h3 {
  color: #b5651d;
  margin-bottom: 0.5rem;
}

ul {
  padding-left: 1.5rem;
}

.thanks {
  margin-top: 1rem;
  color: #6a4028;
  font-weight: bold;
  font-size: 1.1rem;
}
</style>
