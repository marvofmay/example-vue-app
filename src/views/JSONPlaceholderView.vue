<template>
  <div class="contact container">
    <h2>Dane testowe z JSON Placeholder !!</h2>

    <JSONPlaceholder msg="https://jsonplaceholder.typicode.com/" />

    <div class="col-md-8 offset-md-2">
      <table v-if="this.dataItemsLoaded" class="table table-hover text-left">
        <tr><td>#</td><td>userId</td><td>tytuł</td></tr>
        <Tr v-for="(item, i) in this.itemsToDisplay" :key="i" :item="item" />
      </table>
    </div>

    <Pagination
    v-if="this.dataItemsLoaded"
    @handleClickButtonPagination="handleClickButtonPagination"
      :perPage="perPage"
      :items=this.items
      @setItemsToDisplay="setItemsToDisplay"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import JSONPlaceholder from '@/components/JSONPlaceholder/JSONPlaceholder.vue'
import Pagination from '@/components/Pagination/Pagination.vue'
import Tr from '@/components/JSONPlaceholder/Table/Tr.vue'
import axios from 'axios'

export default {
  name: 'JSONPlaceholderView',
  components: {
    JSONPlaceholder,
    Pagination,
    Tr
  },
  data () {
    return {
      items: [],
      itemsToDisplay: [],
      perPage: 10,
      dataItemsLoaded: false
    }
  },
  methods: {
    handleClickButtonPagination (displayTextButton) {
      // console.log('component JSON handleClickButtonPagination')
    },
    setItemsToDisplay (items) {
      this.itemsToDisplay = items
    },
    getItems () {
      axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
        this.items = response.data
        this.dataItemsLoaded = true
        this.itemsToDisplay = response.data
      })
    }
  },
  mounted () {
    this.items = this.getItems()
  },
  computed () {
    console.log('computed JSON')
  }
}
</script>
<style>
  table {
    text-align: left;
  }
</style>
