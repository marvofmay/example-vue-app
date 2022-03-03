<template>
  <div class="json-placecholder col-md-12">
    <img alt="Vue logo" src="../assets/logo.png">
    <Welcome msg="Witaj w przykładowej aplikacji Vue.js" />
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
