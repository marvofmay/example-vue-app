<template>
  <button @click="handleClickButtonPagination(displayTextButton)" >
    {{displayTextButton}}
  </button>
  </template>
<script>
export default {
  name: 'Button',
  props: ['displayTextButton', 'currentButton'],
  methods: {
    handleClickButtonPagination (displayTextButton) {
      this.$emit('handleClickButtonPagination', displayTextButton)
    }
  }
}
</script>
<style>
.myButton {
    margin-left: 3px;
}
.myButton {
    box-shadow:inset 0px 1px 0px 0px #97c4fe;
    background:linear-gradient(to bottom, #3d94f6 5%, #1e62d0 100%);
    background-color:#3d94f6;
    border-radius:12px;
    border:1px solid #337fed;
    display:inline-block;
    cursor:pointer;
    color:#ffffff;
    font-family:Arial;
    font-size:12px;
    font-weight:bold;
    padding:5px 10px;
    text-decoration:none;
    text-shadow:0px 1px 0px #1570cd;
}
.myButton:hover {
    background:linear-gradient(to bottom, #1e62d0 5%, #3d94f6 100%);
    background-color:#1e62d0;
}
.active {
    position:relative;
    top:1px;
    background:linear-gradient(to bottom, #44c767 5%, #5cbf2a 100%) !important;
    background-color:#44c767  !important;
}
</style>
