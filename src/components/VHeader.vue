<template>
  <header class="v-header">
    <i class="iconfont icon-ic_menu"></i>
  </header>
</template>

<script>
export default {
  name: 'VHeader'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import "../common/sass/base.sass"
  @import "../common/sass/fontIcon.sass"
  .v-header
    padding-left: #{26px/$rem}rem
    height: #{56px/$rem}rem
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.51) 95%)
    .iconfont
      color: #fff
      font-size: 0.8rem
      top: 20%
      position: relative
</style>
