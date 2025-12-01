<template>
  <section class="gifts-section">
    <div class="card">
      <h2>Regalos & Detalles</h2>

      <p class="intro">
        Tu presencia es lo más importante para nosotros. Pero si deseas hacernos un detalle
        especial, aquí te dejamos algunas opciones pensadas con cariño.
      </p>

      <div class="gifts-grid">
        <div class="gift-box">
          <h3>Objetos para el hogar</h3>
          <p>
            Si prefieres llevar un obsequio tradicional, ¡nos encantará recibirlo! Puede ser algo
            simbólico, útil o simplemente un detalle personal que quieras compartir.
          </p>
          <h4></h4>
        </div>
      </div>

      <p class="thanks">Gracias por tu cariño y por acompañarnos en esta etapa tan especial ❤️</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GiftsSection',
}
</script>

<style scoped>
.gifts-section {
  padding: 5rem 1.5rem;
  display: flex;
  justify-content: center;
  background: white url('https://www.transparenttextures.com/patterns/white-linen.png');
  background-size: 250px 250px;
}

.card {
  background: #fffefc;
  padding: 3rem 3.5rem;
  border-radius: 22px;
  box-shadow: 0 6px 18px #d4791f;
  backdrop-filter: blur(6px);
  height: 100%;
  max-width: 900px;
  width: 100%;
  text-align: center;
}

h2 {
  font-size: 2.2rem;
  margin-bottom: 1rem;
  font-weight: 700;
  color: #000;
}

.intro {
  font-size: 1.15rem;
  margin-bottom: 2.5rem;
  color: #000;
}

.gifts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.7rem;
  margin-bottom: 2.5rem;
}

.gift-box {
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 18px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
}

.gift-box h3 {
  font-size: 1.35rem;
  margin-bottom: 0.8rem;
  font-weight: 600;
  color: #000;
}

.gift-box p {
  font-size: 1rem;
  line-height: 1.5;
  color: #000;
}

.thanks {
  margin-top: 2rem;
  font-weight: 600;
  font-size: 1.1rem;
  color: #000;
}
</style>
