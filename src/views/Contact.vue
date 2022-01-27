<template>
  <div class="contact container">
    <h2>Wyślij do Nas wiadomość !!</h2>
    <Form msg="Formularz kontaktowy" method="POST" />
  </div>
</template>

<script>
// @ is an alias to /src
import Form from '@/components/Contact/Form.vue'

export default {
  name: 'Contact',
  components: {
    Form
  }
}
</script>
