import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import firebase from 'firebase/app'
import 'firebase/auth'
import store from './store'

const firebaseConfig = {
  apiKey: 'AIzaSyDYi3mIOxy7hdWyL12IgltRfdkLLukVjzU',
  authDomain: 'example-vue-app.firebaseapp.com',
  projectId: 'example-vue-app',
  storageBucket: 'example-vue-app.appspot.com',
  messagingSenderId: '867296209669',
  appId: '1:867296209669:web:d82d76ca1abe2ca413656c'
}

firebase.initializeApp(firebaseConfig)
firebase.auth().onAuthStateChanged(user => {
  store.dispatch('fetchUser', user)
})

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
