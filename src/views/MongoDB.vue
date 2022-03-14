<template>
  <div class="row">
    <h2>Dane z MongoDB!!</h2>
    <div class="row">
      <div class="col-md-8">
        <Mongo :users="users" v-if="users.length > 0" />
      </div>
      <div class="col-md-4">
        <Form />
      </div>
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
        console.log(this.users, 'component MongoDB.vue getUsersFromMongoDB')
      } catch (error) {
        console.log(error)
      }
    },
    async handleClickButtonDelete (userId) {
      try {
        const message = await UserService.deleteUser(userId)
        console.log(message)
        this.getUsersFromMongoDB()
      } catch (error) {
        console.log(error)
      }
    },
    handleClickkButtonPagination (displayTextButton) {
      this.currentButtonPagination = displayTextButton
    }
  },
  async created () {
    await this.getUsersFromMongoDB()
  }
}
</script>
