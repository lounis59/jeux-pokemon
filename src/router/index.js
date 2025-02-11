import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SelectPoke from '@/views/SelectPoke.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/select',
    name: 'selctPoke',
    component: SelectPoke
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
