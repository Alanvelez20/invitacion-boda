<template>
  <MainLayout>
    <section class="inicio">
      <h1>¡Nuestra boda está por comenzar! 💍</h1>
      <p>Bienvenidos a nuestra invitación digital.</p>
      <router-link to="/confirmacion">Confirmar asistencia</router-link>
    </section>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../layouts/MainLayout.vue'
</script>

<style scoped>
.inicio {
  text-align: center;
  margin-top: 4rem;
}
a {
  display: inline-block;
  margin-top: 2rem;
  background-color: var(--color-primario);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
}
</style>
