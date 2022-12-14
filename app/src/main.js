import { createApp } from 'vue'
import { routes } from './routes.js'
import App from './App.vue'

import './assets/main.css'
import {createRouter, createWebHistory} from "vue-router";

const app = createApp(App)
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

app.use(router)

app.mount('#app')
