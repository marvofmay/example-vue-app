<template>
  <div class="row">
    <form method="post" class="form" @submit.prevent="handleSubmit">
      <div class="row">
        <label class="col-sm-2 col-form-label">imię:</label>
        <div class="col-md-4">
          <input type="text" name="firstName" class="form-control" v-model="firstName">
        </div>
      </div>
      <div class="row">
        <label class="col-sm-2 col-form-label">nazwisko:</label>
        <div class="col-md-4">
          <input type="text" name="lastName" class="form-control" v-model="lastName">
        </div>
      </div>
      <div class="row">
        <label class="col-sm-2 col-form-label">email:</label>
        <div class="col-md-4">
          <input type="email" name="email" class="form-control" v-model="email">
        </div>
      </div>
      <fieldset class="row mb-3">
        <legend class="col-form-label col-sm-2 pt-0">płeć:</legend>
        <div class="col-sm-10">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="gender" id="woman" value="woman" checked v-model="gender">
            <label class="form-check-label" for="woman">
            woman
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="gender" id="man" value="man" v-model="gender">
            <label class="form-check-label" for="man">
            man
            </label>
          </div>
        </div>
      </fieldset>
      <div class="row mb-3">
        <div class="col-sm-10 offset-sm-2">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" name="active" id="active" v-model="active">
            <label class="form-check-label" for="active">
            Aktywny?
            </label>
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Wyślij</button>
    </form>
  </div>
</template>

<script>
import UserService from '../../../server/service/UserService'

export default {
  name: 'Form',
  components: {
  },
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      gender: 'woman',
      active: false
    }
  },
  methods: {
    async handleSubmit () {
      try {
        const response = await UserService.createUser({
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          gender: this.gender,
          isActive: this.active
        })
        console.log(response, 'on submit')
        this.$parent.getUsersFromMongoDB()
      } catch (error) {
        console.log(error)
      }
    }
  },
  async created () {
  }
}
</script>
<style>
  form {
    text-align: left;
  }
</style>
