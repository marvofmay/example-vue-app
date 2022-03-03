<template>
  <div class="register">
    <h2>Rejestracja !!</h2>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="text" placeholder="Name" v-model="name" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="register">Submit</button></p>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import router from '../router'

export default {
  name: 'Register',
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    // register
    register () {      
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          data.user.updateProfile({
            displayName: this.name
          })
          console.log('Successfully registered!')
          router.push('/secret')
        })
        .catch(error => {
          console.log(error.code)
          alert(error.message)
        })
    }
  }
}
</script>
