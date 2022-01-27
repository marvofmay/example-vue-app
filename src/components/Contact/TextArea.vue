<template>
  <div class="col-md-6 offset-md-3">
    <label class="form-label float-start">{{label}}:</label>
    <textarea class="form-control" :name=name v-model="textAreaValue"></textarea>
  </div>
</template>

<script>
export default {
  name: 'TextArea',
  props: ['label', 'name', 'modelValue'],
  computed: {
    textAreaValue: {
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
