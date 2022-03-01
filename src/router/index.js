import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import JSONPlaceholderView from '../views/JSONPlaceholderView.vue'
import MongoDB from '../views/MongoDB.vue'
import Register from '../views/Register.vue'
import SignIn from '../views/SignIn.vue'
import SignOut from '../views/SignOut.vue'
import Secret from '../views/Secret.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/json-placeholder',
    name: 'JSONPlaceholder',
    component: JSONPlaceholderView
  },
  {
    path: '/mongodb',
    name: 'MongoDB',
    component: MongoDB
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/sign-out',
    name: 'SignOut',
    component: SignOut
  },
  {
    path: '/secret',
    name: 'Secret',
    component: Secret
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
