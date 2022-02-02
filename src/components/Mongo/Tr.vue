<template>
  <tr>
    <td>{{user._id}}</td>
    <td>{{user.firstName}}</td>
    <td>{{user.lastName}}</td>
    <td>{{user.email}}</td>
    <td>{{user.gender}}</td>
    <td>{{user.isActive}}</td>
    <td>{{ `${user.createdAt.getDate()} / ${user.createdAt.getMonth() + 1} / ${user.createdAt.getFullYear()} ${user.createdAt.getHours()}:${user.createdAt.getMinutes()}:${user.createdAt.getSeconds()}` }}</td>
    <td><button class="btn btn-danger delete-user" @click="handleClickButtonDelete(user._id)">usuń</button></td>
  </tr>
</template>

<script>
export default {
  name: 'Tr',
  props: ['user'],
  methods: {
    handleClickButtonDelete (userId) {
      this.$parent.handleClickButtonDelete(userId)
    }
  }
}
</script>
<style>
  button.delete-user {
      background-color:#dc3545 !important;
  }
</style>
