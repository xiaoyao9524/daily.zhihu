<template>
  <div class="swiper">
    <div class="swiper-container">
      <slot></slot>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import "../common/js/swiper.js";

  export default {
    mounted () {
      setTimeout(() => {
        var mySwiper = new Swiper('.swiper-container', {
          loop: false,
          autoplay: 3000,
          autoplayDisableOnInteraction: false,
          pagination: '.swiper-pagination',
        })
      }, 20)
    }
  }
</script>

<style lang="sass">
  @import "../common/css/swiper.css"
  @import "../common/sass/base.sass"

  .swiper-container
    width: 100vw
    height: #{332px/$rem}rem
    .swiper-slide
      position: relative
      height: #{332px/$rem}rem
      overflow: hidden
      .mask
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: 0
        z-index: 15
        width: 100%
        height: #{332px/$rem}rem
        background: #5B7492
        opacity: .4
      img
        width: 100%
        position: absolute
        top: 50%
        transform: translate(0, -50%)
        z-index: 10
      h3
        position: absolute
        right: #{22px/$rem}rem
        bottom: #{88px/$rem}rem
        z-index: 20
        width: 70%
        text-align: right
        font: #{22px/$rem}rem/#{44px/$rem}rem "微软雅黑"
        font-weight: bold
        color: #fff
    .swiper-pagination
      position: absolute
      width: 95%
      height: #{10px/$rem}rem
      left: 0
      bottom: #{46px/$rem}rem
      text-align: right
      .swiper-pagination-bullet
        width: #{10px/$rem}rem
        height: #{10px/$rem}rem
        background: #000
        opacity: .3
      .swiper-pagination-bullet-active
        background: #fff
</style>
