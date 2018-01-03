<template>
  <div class="loading">
    <span class="left"></span>
    <span class="middle"></span>
    <span class="right"></span>
  </div>
</template>

<script>
    export default {
        name: "loading"
    }
</script>

<style scoped lang="sass">
  @import "../common/css/swiper.css"
  @import "../common/sass/base.sass"
  $yellow: #FFD300
  $blue: #5B7492
  $gray: #acb9c8
  .loading
    position: relative
    margin: #{130px/$rem}rem auto 0
    width: #{200px/$rem}rem
    height: #{200px/$rem}rem
    span
      position: absolute
      top: 0
      left: 0
      width: #{20px/$rem}rem
      height: #{20px/$rem}rem
      border-radius: 50%
      transform: translateX(-50%)
    .left
      animation: lMove 2.5s ease infinite
      background: $gray
    .right
      animation: rMove 2.5s ease infinite
      background: $blue
    .middle
      left: 50%
      animation: mMove 2.5s ease infinite
      background: $blue
  @keyframes lMove
    0%
      left: 0
      background: $yellow
    25%
      left: 50%
      background: $yellow
    50%
      left: 100%
      background: $blue
    75%
      left: 50%
      background: $gray
    100%
      left: 0
      background: $gray
  @keyframes rMove
    0%
      left: 100%
      background: $gray
    25%
      left: 50%
      background: $gray
    50%
      left: 0
      background: $blue
    75%
      left: 50%
      background: $yellow
    100%
      left: 100%
      background: $yellow
  @keyframes mMove
    25%
      background: $blue
    50%
      background: $yellow
    75%
      background: $blue
</style>
