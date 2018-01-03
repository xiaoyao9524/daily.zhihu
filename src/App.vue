<template>
  <div class="app">
    <header class="v-header">
      <i v-if="!flag" @click="toggleFlag" class="iconfont icon-ic_menu"></i>
      <i v-if="flag" @click="toggleFlag" class="iconfont icon-ic_back"></i>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex';
  export default {
    name: 'app',
    methods: {
      ...mapMutations({
        toggleFlag: 'TOGGLE_FLAG'
      })
    },
    computed: {
      ...mapGetters([
        'flag'
      ])
    }
  }
</script>

<style lang="sass">
  @import "./common/sass/reset.sass"
  @import "./common/sass/base.sass"
  @import "./common/sass/fontIcon.sass"

  .v-header
    position: fixed
    z-index: 100
    padding-left: #{26px/$rem}rem
    width: 100%
    height: #{56px/$rem}rem
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.51) 95%)
    .iconfont
      color: #fff
      font-size: 0.8rem
      top: 20%
      position: relative
</style>
