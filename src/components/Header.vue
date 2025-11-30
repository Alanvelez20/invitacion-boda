<template>
  <header class="navbar">
    <div class="logo">Alan y Naomi</div>

    <button class="menu-toggle" @click="menuOpen = !menuOpen">☰</button>

    <nav :class="{ open: menuOpen }">
      <a href="#cuenta-regresiva">Cuenta regresiva</a>
      <a href="#itinerario">Itinerario</a>
      <a href="#cuando-donde">¿Cuándo y Dónde?</a>
      <a href="#confirmacion">Confirmación</a>
      <a href="#codigo-vestimenta">Código de Vestimenta</a>
      <a href="#galeria">Galería</a>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 1rem 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 10;
}

.logo {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  color: ##000;
}

.menu-toggle {
  display: none;
  font-size: 1.8rem;
  background: none;
  border: none;
  cursor: pointer;
}

nav {
  display: flex;
  gap: 1.5rem;
}

nav a {
  text-decoration: none;
  color: #000;
  font-weight: 500;
  transition: color 0.3s;
}

nav a:hover {
  color: #d4791f;
}

/* 📱 Responsive */
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  nav {
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    flex-direction: column;
    background: #fff7f0;
    padding: 1rem 0;
    display: none;
  }

  nav.open {
    display: flex;
  }
}
</style>
