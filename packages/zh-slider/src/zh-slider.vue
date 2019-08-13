<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(item, index) in items" :key="index">
      <router-link :to="{ name: item.href}">
        <img class="img" :src="item.src" />
      </router-link>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'zhSlider',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    items: {
      type: Array,
      default () {
        return []
      }
    },
    swiperOption: {
      type: Object,
      default () {
        return {
          autoplay: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          },
          notNextTick: false
        }
      }
    }
  }
}
</script>
<style lang="css" scoped>
.img {
  width: 100%;
  height: auto;
}
</style>
