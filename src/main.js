import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Importar estilos globales
import './assets/styles/base.css'
import './assets/styles/variables.css'

createApp(App).use(router).mount('#app')
