<template>
  <i :class="classes" :style="style"></i>
</template>
<script>
export default {
  name: 'zhIconfont',
  props: {
    icon: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 18
    },
    color: {
      type: String,
      default: '#000'
    }
  },
  computed: {
    classes () {
      return [
        'iconfont',
        this.icon
      ]
    },
    style () {
      return {
        color: this.color,
        fontSize: `${this.size}px`
      }
    }
  }
}
</script>
