<template>
  <div class="zh_bgi">
    <div class="leaf">
      <div class="universe">
        <div class="sun" />
        <div class="moon" />
      </div>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: 'zhBgi3D'
}
</script>
<style scoped>
@import url("./rishi.css");
.content {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -35%);
  z-index: 999;
}
</style>
