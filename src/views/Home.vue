<template>
  <div class="json-placecholder col-md-12">
    <img alt="Vue logo" src="../assets/logo.png">
    <Welcome msg="Witaj w przykładowej aplikacji Vue.js!!" />
    <img class="logo" alt="mongodb logo" src="../assets/mongodb-logo.png">
    <img class="logo" alt="firebase logo" src="../assets/firebase-logo.png">
    <img class="logo" alt="cypress logo" src="../assets/cypress-logo.png">
    <img class="logo" alt="jest logo" src="../assets/jest-logo.png">
  </div>
</template>

<script>
import Welcome from '@/components/Home/Welcome.vue'

export default {
  name: 'Home',
  components: {
    Welcome
  }
}
</script>
<style scoped>
  .logo {
    width: 300px;
  }
</style>
