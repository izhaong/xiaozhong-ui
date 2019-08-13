<template>
  <div :style="`color: ${color}`">这是demo-component.vue</div>
</template>
<script>
export default {
  name: 'colorPicker',
  props: {
    color: {
      type: String,
      default: '#0f0'
    }
  }
}
</script>
