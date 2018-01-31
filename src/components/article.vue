<template>
  <transition name="v-article">
    <div class="v-article-wrp">
      <div class="v-content-img-title">
        <h2 class="v-content-img-title-text">{{content.title}}</h2>
        <div class="v-content-img-title-mask"></div>
        <img
          class="title-img"
          v-if="content.imgUrl.length"
          :src="content.imgUrl"
        >
      </div>
      <div class="v-content" v-if="content.vBody.length"  v-html="content.vBody"></div>
      <v-loading v-show="!content.vBody && !content.imgUrl.length"></v-loading>
    </div>
  </transition>
</template>

<script>
  import VLoading from '../components/loading';
  import {mapMutations} from 'vuex';

  export default {
    name: "v-article",
    data () {
      return {
        content: {
          imgUrl: "",
          vBody: "",
          title: ""
        },
        test: "",
        oldQuery: ""
      }
    },
    activated () {
      if (this.oldQuery === this.$route.query.id) {
        return
      }
      this.oldQuery = this.$route.query.id;
      this.content.vBody = "";
      this.content.imgUrl = "";
      this.content.title = "";
      this.getData();
    },
    methods: {
      getData () {
        console.log("要发送的ID为：", this.$route.query.id)
        this.test = this.$route.query.id;
        let url = "https://zhihu-agent.herokuapp.com/get?api=/4/news/".concat(this.$route.query.id);
        this.$http.get(url).then((res) => {
          console.log(res.data);
          this.content.imgUrl = res.data.image;
          this.content.title = res.data.title;
          this.content.vBody = res.data.body;
        })
      },
      ...mapMutations({
        setIsOpenArticle: 'SET_IS_OPEN_ARTICLE'
      })
    },
    components: {
      VLoading
    }
  }
</script>

<style lang="sass">
  @import "../common/sass/base.sass"
  .v-article-wrp
    position: absolute
    top: 0
    left: 0
    width: 100vw
    .v-content-img-title
      position: relative
      width: 100%
      height: #{264px/$rem}rem
      overflow: hidden
      .v-content-img-title-text
        position: absolute
        right: #{20px/$rem}rem
        bottom: #{44px/$rem}rem
        z-index: 12
        text-align: right
        width: #{260px/$rem}rem
        font: #{20px/$rem}rem/#{26px/$rem}rem "微软雅黑"
        text-shadow: 0 0 5px rgba(0, 0, 0, 0.5)
        font-weight: bold
        color: #efeff0
      .v-content-img-title-mask
        position: absolute
        left: 0
        top: 0
        right: 0
        bottom: 0
        z-index: 11
        background: rgba(91, 116, 146, 0.5)
      .title-img
        width: 100%
        position: absolute
        left: 0
        top: 50%
        transform: translateY(-50%)
        z-index: 10
    .v-content
      padding: #{20px/$rem}rem
      .content-inner
        .question-title
          color: #5b7492
        .answer
          .meta
            &:after
              display: block
              clear: both
              content: ""
            .avatar
              float: left
              width: #{28px/$rem}rem
              height: #{28px/$rem}rem
              margin-right: #{8px/$rem}rem
            .author,.bio
              font: #{12px/$rem}rem/#{20px/$rem}rem "微软雅黑"
              color: #fc4482
            .bio
              color: #666
          .content
            p
              font: #{14px/$rem}rem/#{20px/$rem}rem "微软雅黑"
              color: #666
              margin-top: #{16px/$rem}rem
          & blockquote
            position: relative
          & blockquote:after
            position: absolute
            top: 0
            bottom: 0
            left: -5%
            width: #{4px/$rem}rem
            background-color: #ffd300
            content: ''
          & figure figcaption
            text-align: center
            margin-top: #{10px/$rem}rem
          & img
            display: block
            max-width: 100%
            margin: 0 auto
        & .view-more
          text-align: center
          margin: #{10px/$rem}rem 0
        & .view-more a
          color: #fed71f
        & .answer
          margin-bottom: #{30px/$rem}rem

  .v-article
    overflow: auto
  .v-article
    transform: translateX(0)
  .v-article-enter-active, .v-article-leave-active
    transition: .3s
  .v-article-enter
    transform: translateX(400%)
  .v-article-enter-to
    transform: translateX(0)
  .v-article-leave
    transform: translateX(0)
  .v-article-leave-to
    transform: translateX(-100%)
</style>
