<template>
  <div class="row">
    <h4>{{ msg }}</h4>
    <p v-if="errors.length">
      <b class="text-danger">Popraw, proszę, następujące błędy:</b>
      <ul class="errors-list">
        <li v-for="(error, i) in errors" :key="i">{{ error }}</li>
      </ul>
    </p>
    <form id="contact-form" class="form" @submit.prevent="handleSubmitMessage" :method=method >
      <Input v-for="(item, i) in items"
      :id="item.id"
      :label="item.inputLabelName"
      :type="item.inputType"
      :name="item.inputName"
      :placeholder="item.inputPlaceholder"
      v-model="item.inputValue"
      :key="i"
      />
      <TextArea name="message" label="wiadomość" v-model="textAreaValue" />
      <ButtonSendMessage textButton="wyślij"  />
    </form>
  </div>
</template>

<script>

import Input from '@/components/Contact/Input.vue'
import TextArea from '@/components/Contact/TextArea.vue'
import ButtonSendMessage from '@/components/Contact/ButtonSendMessage.vue'

export default {
  name: 'Form',
  components: {
    Input, TextArea, ButtonSendMessage
  },
  data () {
    return {
      items: [
        {
          inputLabelName: 'imię',
          inputType: 'text',
          inputName: 'username',
          inputValue: '',
          inputPlaceholder: 'wpisz imię',
          id: 'username'
        },
        {
          inputLabelName: 'email',
          inputType: 'email',
          inputName: 'email',
          inputValue: '',
          inputPlaceholder: 'wpisz email',
          id: 'email'
        }
      ],
      textAreaValue: '',
      errors: []
    }
  },
  props: {
    msg: String,
    method: String
  },
  methods: {
    // walidacja
    validateFormMessage () {
      this.errors = []
      if (!this.items[0].inputValue) {
        this.errors.push('pole "imię" wymagane')
      }
      if (!this.items[1].inputValue) {
        this.errors.push('pole "email" wymagane')
      } else if (!this.validEmail(this.items[1].inputValue)) {
        this.errors.push('Valid email required.')
      }
      if (!this.textAreaValue) {
        this.errors.push('pole "wiadomość" wymagane')
      } else if (!this.validEmail(this.items[1].inputValue)) {
        this.errors.push('Valid email required.')
      }

      if (!this.errors.length) {
        return true
      }

      return false
    },
    validEmail (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      return re.test(email)
    },
    handleSubmitMessage () {
      if (this.validateFormMessage()) {
        console.log(this.items[0].inputValue, ' ', this.items[1].inputValue, ' ', this.textAreaValue)
        console.log('można wysyłać')
      }
    }
  }
}
</script>
