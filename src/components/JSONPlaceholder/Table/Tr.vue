<template>
  <tr>
    <td>{{item.id}}</td>
    <td>{{item.userId}}</td>
    <td>{{item.title}}</td>
  </tr>
</template>

<script>
export default {
  name: 'Tr',
  props: ['item']
}
</script>
