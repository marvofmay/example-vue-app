<template>
  <div id="nav">
    <router-link to="/">Główna</router-link> |
    <router-link to="/about">Info</router-link> |
    <router-link to="/contact">Kontakt</router-link> |
    <router-link to="/json-placeholder">JSON Placeholder</router-link> |
    <router-link to="/mongodb">MongoDB</router-link> |
    <router-link to="/register">Rejestracja</router-link> |
    <router-link to="/sign-in" v-if="!this.isLoggedIn">Logowanie</router-link> |
    <router-link to="/sign-out" @click="signOut" v-if="this.isLoggedIn">Wylogouj</router-link> |
    <router-link to="/secret">Sekret</router-link>
  </div>
  <router-view/>
</template>

<script>
import firebase from 'firebase/app'
import router from './router'

export default {
  name: 'App',
  data () {
    return {
      isLoggedIn: false
    }
  },
  methods: {
    signOut () {
      firebase.auth().signOut()
      router.push('/')
    },
    checkIsUserLoggedIn () {
      // runs after firebase is initialized
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          this.isLoggedIn = true // if we have a user
        } else {
          this.isLoggedIn = false // if we do not
        }
        console.log('this.isLoggedIn: ', this.isLoggedIn)
      })
    }
  },
  created () {
    console.log('Component App.vue has been created!')
    this.checkIsUserLoggedIn()
  },
  mounted () {
    console.log('Component App.vue has been mounted!')
  },
  updated () {
    console.log('Component App.vue has been updated!')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
ul.errors-list {
  list-style-type: none;
}
</style>
