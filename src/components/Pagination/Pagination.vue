<template>
  <div>

    <Button
      v-if="this.startBtn > 1"
      :displayTextButton="1"
      @handleClickButtonPagination="handleClickButtonPagination"
      :currentButton="1"
      class="myButton"
    />
    <span v-if="this.startBtn > 1"> ... </span>

    <Button
      v-for="(b, i) in buttons"
      :key=i
      :displayTextButton="b"
      @handleClickButtonPagination="handleClickButtonPagination"
      :currentButton="currentButton"
      :class=getButtonClass(b)
    />

    <span  v-if="this.endBtn < this.numberOfAllButtonsPagination"> ... </span>
    <Button
      v-if="this.endBtn < this.numberOfAllButtonsPagination"
      :displayTextButton="this.numberOfAllButtonsPagination"
      @handleClickButtonPagination="handleClickButtonPagination"
      :currentButton="this.numberOfAllButtonsPagination"
      class="myButton"
    />
  </div>
</template>

<script>

import Button from './Button.vue'

export default {
  name: 'Paginaion',
  components: {
    Button
  },
  props: ['items', 'perPage'],
  data () {
    return {
      radius: 4,
      currentButton: 1,
      numberOfAllButtonsPagination: 1,
      buttons: []
    }
  },
  methods: {
    handleClickButtonPagination (displayTextButton) {
      this.currentButton = displayTextButton
      this.endBtn = ((displayTextButton + this.radius) <= this.numberOfAllButtonsPagination) ? (displayTextButton + this.radius) : this.numberOfAllButtonsPagination
      this.startBtn = (displayTextButton - this.radius > 0) ? displayTextButton - this.radius : 1
      this.buttons = this.getButtons()
      this.getReducedItems()
      this.$emit('handleClickButtonPagination', displayTextButton)
    },
    getButtons () {
      this.buttons = []
      for (var i = this.startBtn; i <= this.endBtn; i++) {
        this.buttons.push(i)
      }

      return this.buttons
    },
    getButtonClass (b) {
      return (this.currentButton === b) ? 'myButton active' : 'myButton'
    },
    getReducedItems () {
      const itemsDisplay = []
      const endReduce = ((this.currentButton - 1) * this.perPage + this.perPage < this.items.length) ? (this.currentButton - 1) * this.perPage + this.perPage : this.items.length
      for (let i = (this.currentButton - 1) * this.perPage; i < endReduce; i++) {
        // itemsDisplay.push({ id: this.items[i].id, userId: this.items[i].userId, title: this.items[i].title })
        itemsDisplay.push({ ...this.items[i] })
      }

      console.log(itemsDisplay, 'itemsDisplay')
      this.$emit('setItemsToDisplay', itemsDisplay)
      // return itemsDisplay
    }
  },
  ready () {
    console.log('component pagination created ready')
  },
  created () {
    this.numberOfAllButtonsPagination = Math.ceil(this.items.length / this.perPage)
    this.startBtn = (this.currentButton - this.radius > 0) ? this.currentButton - this.radius : 1
    this.endBtn = ((this.currentButton + this.radius) <= this.numberOfAllButtonsPagination) ? (this.currentButton + this.radius) : this.numberOfAllButtonsPagination
  },
  mounted () {
    this.getButtons()
    this.getReducedItems()
    console.log(this.getButtons(), 'btn')
    console.log(this.items, 'items')
  },
  computed () {
  }
}
</script>
