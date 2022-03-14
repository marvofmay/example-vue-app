<template>
  <tr>
    <td>{{user._id}}</td>
    <td>{{user.firstName}}</td>
    <td>{{user.lastName}}</td>
    <td>{{user.email}}</td>
    <td>{{user.gender}}</td>
    <td v-if="user.isActive">tak</td>
    <td v-else>nie</td>
    <td>{{ formatDate(user.createdAt) }}</td>
    <td><button class="btn btn-danger delete-user" @click="handleClickButtonDelete(user._id)">usuń</button></td>
  </tr>
</template>

<script>
import moment from 'moment'

export default {
  name: 'Tr',
  props: ['user'],
  methods: {
    handleClickButtonDelete (userId) {
      this.$parent.handleClickButtonDelete(userId)
    },
    formatDate: (value) => {
      if (value) {
        return moment(value).format('MM/DD/YYYY')
      }
    }
  }
}
</script>
<style>
  button.delete-user {
      background-color:#dc3545 !important;
  }
</style>
