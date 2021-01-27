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
    name: 'quokkaism',
    component: Quokkaism
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/career',
    name: 'career',
    component: Career
  },
  {
    path: '/animal',
    name: 'animal',
    component: Animal
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'pathNotFound',
    component: PathNotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
