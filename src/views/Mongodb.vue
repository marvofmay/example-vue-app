<template>
  <div class="row">
    <h2>Dane z MongoDB!!</h2>
    <div class="col-md-8">
      <Mongo :users="users" v-if="users.length > 0" />
    </div>
    <div class="col-md-4">
      <Form />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Mongo from '@/components/Mongo/Mongo.vue'
import Form from '@/components/Mongo/Form.vue'
import UserService from '../../server/service/UserService'

export default {
  name: 'MongoDB',
  components: {
    Mongo,
    Form
  },
  data () {
    return {
      users: [],
      currentButtonPagination: 1
    }
  },
  methods: {
    async getUsersFromMongoDB () {
      try {
        this.users = []
        this.users = await UserService.getUsers()
        console.log(this.users, 'MongoDB.vue')
      } catch (error) {
        console.log(error)
      }
    },
    async handleClickButtonDelete (userId) {
      console.log(userId, 'MongoDB.vue')
      try {
        const message = await UserService.deleteUser(userId)
        console.log(message)
        // this.getUsersFromMongoDB()
      } catch (error) {
        console.log(error)
      }
    },
    handleClickkButtonPagination (displayTextButton) {
      this.currentButtonPagination = displayTextButton
      console.log('component JSON handleClickButtonPagination MongoDB.Vue', this.currentButtonPagination)
    }
  },
  async created () {
    await this.getUsersFromMongoDB()
    console.log(JSON.parse(JSON.stringify(this.users)), 'MongoDB created')
  }
}
</script>
