<template>
  <div id="nav">
    <router-link to="/">Główna</router-link> |
    <router-link to="/about">Info</router-link> |
    <router-link to="/contact">Kontakt</router-link> |
    <router-link to="/json-placeholder">JSON Placeholder</router-link> |
    <router-link to="/mongodb">MongoDB</router-link>
  </div>
  <router-view/>
</template>

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
