<template>
  <div>
    <color-picker :color="color"></color-picker>
    <zhIconfont :icon="icon"></zhIconfont>
    <!-- <zh-slider :items="items"></zh-slider> -->
    <!-- <zh-input placeholder='请输入账号' alt='账号' type="password" width='100%'></zh-input> -->
    <zh-button type="primary" width="80px" height="auto" padding="8px 20px" fontSize="auto" fontColor="#fff">button</zh-button>
    <div class="leaf">
      <zhBgi3D>
        <h1>这是content部分</h1>
      </zhBgi3D>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      color: '#f0f',
      icon: 'icon-icon-test2',
      items: [
        {
          href: 'home',
          src:
            'https://img12.360buyimg.com/jrpmobile/jfs/t1/52802/14/4027/212241/5d1b14f4Ed1748086/588363d90a40b28c.png?width=750&height=320'
        },
        {
          href: 'home',
          src:
            'https://img12.360buyimg.com/jrpmobile/jfs/t1/54124/12/3394/140400/5d11e389Ee12d74f3/f3cba452b6470938.png?width=750&height=320'
        }
      ]
    }
  }
}
</script>
