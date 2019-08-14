<template>
  <div class="button" :class="type" :style="`width: ${width};height: ${height};padding: ${padding}`">
    <span :style="`fontSize: ${fontSize}; color: ${fontColor}`">
      <slot />
    </span>
    <div class="back"></div>
  </div>
</template>
<script>
export default {
  name: 'zhButton',
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    width: {
      type: String,
      default: '80px'
    },
    height: {
      type: String,
      default: 'auto'
    },
    padding: {
      type: String,
      default: '8px 20px'
    },
    fontSize: {
      type: String,
      default: 'auto'
    },
    fontColor: {
      type: String,
      default: '#fff'
    }
  },
  computed: {
    classes () {
      return ['iconfont', this.icon]
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
<style scoped>
  :root {
  /* --height: 50px;
  --width: 100px; */
  /* font-size: 14px; */
  /* border-radius: 5px */
}

.button {
  position: relative;
  /* height: 50px;*/
  width: auto;
  /* padding: 5px; */
  /* width: calc(0.8 * var(--width));
  height: calc(0.7 * var(--height)); */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  margin: 0 0.8rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 3px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0, 0.22, 0.3, 1);
  border-radius: 10px
}
.button:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.1);
}
.button span {
  /* color: #fff; */
  z-index: 10;
  text-transform: uppercase;
  letter-spacing: 2px;
}
.button.primary {
  background: #409EFF;
}
.button.info {
  background: #909399;
}
.button.success {
  background: #67C23A;
}
.button.warning {
  background: #E6A23C;
}
.button.danger {
  background: #F56C6C;
}
.button .back {
  position: absolute;
  width: 0;
  height: 0;
  border-radius: 50%;
  z-index: 5;
  transition: all 2.5s cubic-bezier(0.1, 0.22, 0.3, 1);
}
.button.primary .back {
  left: -50%;
  top: -50%;
  background: #73792a;
}
.button.info .back {
  right: -50%;
  top: -50%;
  background: #c0392b;
}
.button.success .back {
  left: -50%;
  bottom: -50%;
  background: #34495e;
}
.button.warning .back {
  right: -50%;
  bottom: -50%;
  background: #2980b9;
}
.button.danger .back {
  right: -50%;
  bottom: -50%;
  background: #2980b9;
}
.button:hover .back {
  width: calc(3 * 50%);
  height: calc(3 * 50%);
}

</style>
