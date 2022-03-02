<template>
  <h1>Zaloguj się do swojego konta</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p v-if="errMsg">{{ errMsg }}</p>
  <p><button @click="signIn">Wyślij</button></p>
</template>

<script>
import firebase from 'firebase/app'
import router from '../router'

export default {
  name: 'signIn',
  data () {
    return {
      email: '',
      password: '',
      router: '',
      errMsg: ''
    }
  },
  methods: {
    signIn () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          console.log('Successfully logged in!', data)
          router.push('/secret')
        })
        .catch(error => {
          switch (error.code) {
            case 'auth/invalid-email':
              this.errMsg = 'Invalid email'
              break
            case 'auth/user-not-found':
              this.errMsg = 'No account with that email was found'
              break
            case 'auth/wrong-password':
              this.errMsg = 'Incorrect password'
              break
            default:
              this.errMsg = 'Email or password was incorrect'
              break
          }
        })
    }
  }
}
</script>
