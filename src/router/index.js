import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Quokkaism from '../views/Quokkaism.vue'
import Career from '../views/Career.vue'
import Animal from '../views/Animal.vue'
import Contact from '../views/Contact.vue'
import PathNotFound from '../views/PathNotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/quokkaism',
    name: 'Quokkaism',
    component: Quokkaism
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/career',
    name: 'Career',
    component: Career
  },
  {
    path: '/animal',
    name: 'Animal',
    component: Animal
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PathNotFound',
    component: PathNotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
