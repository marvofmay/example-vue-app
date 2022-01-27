<template>
  <div class="json-placecholder">
    <h4>{{ msg }}</h4>
  </div>
</template>

<script>
export default {
  name: 'JSONPlaceholder',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
