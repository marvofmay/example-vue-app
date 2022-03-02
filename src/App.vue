<template>
  <div id="nav">
    <router-link to="/">Główna</router-link> |
    <router-link to="/about">Info</router-link> |
    <router-link to="/contact">Kontakt</router-link> |
    <router-link to="/json-placeholder">JSON Placeholder</router-link> |
    <router-link to="/mongodb">MongoDB</router-link> |
    <router-link to="/register">Rejestracja</router-link> |
    <router-link to="/sign-in" >Logowanie</router-link> <span v-if="user.isLoggedIn"> | </span>
    <router-link to="/secret" v-if="user.isLoggedIn">Sekret</router-link> <span v-if="user.isLoggedIn">| </span>
    <router-link to="/sign-out" @click="signOut" v-if="user.isLoggedIn">Wylogouj</router-link>
  </div>
  <router-view/>
</template>

<script>
import firebase from 'firebase/app'
import router from './router'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  methods: {
    signOut () {
      firebase.auth().signOut()
      router.push('/')
    },
    checkIsUserLoggedIn () {
      // runs after firebase is initialized
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          // if we have a user
        } else {
          // if we do not
          router.push('/')
        }
        console.log('user: ', user)
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
  },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: 'user'
    })
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
