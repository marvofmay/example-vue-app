<template>
  <div class="col-md-6 offset-md-3 mt-2">
    <button class="btn btn-success" type="submit" >{{textButton}}</button>
  </div>
</template>

<script>
export default {
  name: 'ButtonSendMessage',
  props: ['textButton']
}
</script>
