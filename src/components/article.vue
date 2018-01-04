<template>
  <transition name="v-article">
    <div class="v-article">
      <div v-show="vBody" class="content" v-html="vBody">

      </div>
      <v-loading v-show="!vBody"></v-loading>
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
        vBody: "",
        test: ""
      }
    },
    activated () {
      this.vBody = "";
      // this.setIsOpenArticle(true);
      this.getData();
    },
    methods: {
      getData () {
        console.log("要发送的ID为：", this.$route.query.id)
        this.test = this.$route.query.id;
        let url = "https://zhihu-agent.herokuapp.com/get?api=/4/news/".concat(this.$route.query.id);
        this.$http.get(url).then((res) => {
          console.log(res.data)
          this.vBody = res.data.body
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

<style scoped lang="sass">
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
