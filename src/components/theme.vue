<template>
  <div class="theme">
    <section class="top-info">
      <img :src="imgSrc" alt="">
      <div class="mask"></div>
      <div class="info" v-show="themeTitleVice.length">
        <h3 class="theme-title-vice">{{themeTitleVice}}</h3>
        <h1 class="theme-title">{{themeTitle}}</h1>
      </div>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import {THEME_URL} from "../api/base"
  import {mapGetters} from 'vuex'

  export default {
    name: "theme",
    data () {
      return {
        imgSrc: "",
        themeTitleVice: "",
        themeTitle: ""
      }
    },
    created () {
      console.log("created")
      this.getData();
    },
    activated () {
      console.log("activated")
      this.getData();
    },
    methods: {
      getData () {
        let id = this.$route.query.id;
        this.$http.get(THEME_URL + id)
          .then((res) => {
            let data = res.data;
            this.imgSrc = data.image
            this.themeTitleVice = data.description
            this.themeTitle = data.name
          })
      }
    },
    computed: {
      ...mapGetters([
        'themeID'
      ])
    }
  }
</script>

<style scoped lang="sass">
  @import "../common/sass/base.sass"
  .theme
    overflow: hidden
    .top-info
      position: relative
      width: 100%
      height: #{300px/$rem}rem
      img
        position: absolute
        top: 0
        left: 50%
        height: 100%
        transform: translateX(-50%)
        z-index: 5
      .mask
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        background-color: #5B7492
        opacity: .4
        z-index: 8
      .info
        width: #{280px/$rem}rem
        text-align: right
        position: absolute
        right: #{20px/$rem}rem
        bottom: #{30px/$rem}rem
        z-index: 10
        .theme-title-vice
          position: relative
          font: #{20px/$rem}rem/#{38px/$rem}rem "微软雅黑"
          color: #ffffff
          font-weight: bold
        .theme-title-vice:after
          content: ''
          position: absolute
          right: 0
          bottom: -#{8px/$rem}rem
          width: #{118px/$rem}rem
          height: #{4px/$rem}rem
          background-color: #ffd300
        .theme-title
          padding-top: #{8px/$rem}rem
          font: #{20px/$rem}rem/#{38px/$rem}rem "微软雅黑"
          color: #ffffff
          font-weight: bold
</style>
