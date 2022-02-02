<template>
  <div class="row">
      <div class="col-md-8">
        <table class="table table-hover" v-if="users.length > 0">
          <tr>
            <td>id</td>
            <td>imię</td>
            <td>nazwisko</td>
            <td>email</td>
            <td>płeć</td>
            <td>aktywny</td>
            <td>utworzono</td>
            <td></td>
          </tr>
          <Tr v-for="(user, i) in usersToDisplay" :key="i" :user="user" />
        </table>
        <Pagination
          @handleClickButtonPagination="handleClickButtonPagination"
          :perPage="perPage"
          :items="items"
          @setItemsToDisplay="setItemsToDisplay"
        />
      </div>
  </div>
</template>

<script>
import Tr from '@/components/Mongo/Tr.vue'
import Pagination from '@/components/Pagination/Pagination.vue'

export default {
  name: 'Mongo',
  components: {
    Tr,
    Pagination
  },
  props: ['users'],
  data () {
    return {
      items: this.users,
      usersToDisplay: this.users,
      perPage: 5
    }
  },
  methods: {
    handleClickButtonDelete (userId) {
      this.$parent.handleClickButtonDelete(userId)
    },
    handleClickButtonPagination (displayTextButton) {
      console.log('component JSON handleClickButtonPagination Mongo.Vue', displayTextButton)
      this.$parent.handleClickkButtonPagination(displayTextButton)
    },
    setItemsToDisplay (items) {
      this.usersToDisplay = items
    }
  },
  created () {
    console.log(this.usersToDisplay, 'created')
  }
}
</script>
