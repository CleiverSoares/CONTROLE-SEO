

import Comandos from '../views/Comandos.vue'
import Medicao from '../views/Medicao-paginas.vue'
import Cadastro from '../components/Cadastrar-informacao-sites.vue'
import VarejoHome from '../views/varejo/varejo-home.vue'
import TerceiroSetor from '../views/terceiro-setor/terceiro-setor-home.vue'
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
  {
    path: '/Varejo-Home',
    name: 'varejo-Home',
    component: VarejoHome
  },
  {
    path: '/Terceiro-Setor-Home',
    name: 'Terceiro-Setor-Home',
    component: TerceiroSetor
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
