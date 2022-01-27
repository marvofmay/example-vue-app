<template>
  <div class="col-md-6 offset-md-3">
    <label class="form-label float-start">{{label}}:</label>
    <input class="form-control" :type=type :name=name v-model="inputValue" :placeholder="placeholder" >
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: ['label', 'name', 'type', 'modelValue', 'placeholder'],
  computed: {
    inputValue: {
      get () {
        return this.modelValue
      },
      set (value) {
        this.$emit('update:modelValue', value)
      }
    }
  }
}
</script>
