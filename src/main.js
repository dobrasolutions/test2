import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'

import Saludo from '../src/components/Saludo.vue';
import Imagen from '../src/components/Imagen.vue';
// Componentes
//const Home = { template:'<h1>Test Martín Dorantes</h1>' }
//const Detail = { template:'<h1>Imagen de Prueba Martín</h1>' }

// Definir Objeto Rutas -> Configuración
const routes = [
    {
        path:'/', component: Saludo,
    },
    {
        path:'/imagen', component: Imagen,
    }
]

// Crear Objeto rutas de Vue Router -> objeto Vue Router
const router = createRouter({
    history: createWebHashHistory(),
    routes, 
})

// Instancia de Vue
const app = createApp(App)
app.use(router)
app.mount('#app')
