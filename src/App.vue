<template>
  <div class="app">
    <!--头部-->
    <header class="v-header">
      <i v-if="!isOpenArticle" @click="openMenu" class="iconfont icon-ic_menu"></i>
      <i v-if="isOpenArticle" @click="back" class="iconfont icon-ic_back"></i>
    </header>
    <!--左侧列表-->
    <aside @click="toggleMenuShowFlag" class="menu" :class="{open: menuShowFlag}">
      <div class="mask"></div>
      <ul>
        <li
          v-for="(item, index) in menuList"
          :class="{current: index === currentId}"
          @click="_setThemeId(item.id)"
        >
          <span>{{ item.name }}</span>
          <i class="iconfont" :class="{'icon-ic_star': index !== currentId,'icon-ic_star_black': index === currentId}"></i>
        </li>
        <li>
          <span>项目地址</span>
          <i class="iconfont icon-github"></i>
        </li>
      </ul>
    </aside>
    <!--路由-->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex';
  import {ROOT_URL} from './api/base'
  export default {
    name: 'app',
    data () {
      return {
        currentId: 0,
        menuList: [
          {
            id: "news/latest",
            name: "首页"
          }
        ]
      }
    },
    mounted () {
      this.getMenuList();
    },
    methods: {
      getMenuList () {
        let url = ROOT_URL.concat("themes")
        this.$http(url).then((res) => {
          for (let i = 0; i < res.data.others.length; i++) {
            this.menuList.push(res.data.others[i]);
          }
          // console.log("左侧列表数据为:", this.menuList)
        })
      },
      openMenu () {
        this.toggleMenuShowFlag();
        this.setIsOpenArticle(false);
      },
      _setThemeId (id) {
        this.setThemeId(id)
        // console.log(id);
        this.$router.push({
          path: "/theme",
          params: {
            id
          }
        })
      },
      back () {
        this.$router.back();
      },
      ...mapMutations({
        toggleMenuShowFlag: 'TOGGLE_MENU_SHOW_FLAG',
        setIsOpenArticle: 'SET_IS_OPEN_ARTICLE',
        setThemeId: 'SET_THEME_ID'
      })
    },
    computed: {
      ...mapGetters([
        'menuShowFlag',
        'isOpenArticle'
      ])
    }
  }
</script>

<style lang="sass">
  @import "./common/sass/reset.sass"
  @import "./common/sass/base.sass"
  @import "./common/sass/fontIcon.sass"
  .app
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
    .menu
      position: fixed
      top: 0
      left: 0
      right: 0
      bottom: 0
      z-index: 9999
      visibility: hidden
      .mask
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: 0
        transition: .3s
        background: rgba(255, 255, 255, 0)
      ul
        box-sizing: border-box
        width: 60%
        padding: #{70px/$rem}rem #{24px/$rem}rem 0 #{22px/$rem}rem
        position: absolute
        left: 0
        top: 0
        bottom: 0
        background: rgba(91,116,146,.75)
        transition: .3s
        transform: translateX(-100%)
        li
          font: #{18px/$rem}rem/#{42px/$rem}rem "微软雅黑"
          color: #fff
          i
            float: right
            font-size: #{22px/$rem}rem
        .current
          color: #ffd300
    .open
      visibility: visible
      .mask
        background: rgba(172, 185, 201, .4)
      ul
        transform: translateX(0)
</style>
