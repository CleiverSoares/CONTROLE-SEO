

import Comandos from '../views/Comandos.vue'
import Medicao from '../views/Medicao-paginas.vue'
import Cadastro from '../components/Cadastrar-informacao-sites.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'cadastro',
    component: Cadastro
  },
  {
    path: '/comandos',
    name: 'comandos',
    component: Comandos
  },
  {
    path: '/medicao',
    name: 'medicao',
    component: Medicao
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
