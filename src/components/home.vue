<template>
  <div class="home">
    <div class="slider">
      <my-swiper v-show="sliderList.length">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in sliderList" :width="windowWidth">
              <img :src="item.image">
              <h3>{{item.title}}</h3>
              <div class="mask"></div>
            </div>
        </div>
      </my-swiper>
    </div>
    <button
      style="position: absolute;left: 0;top: 0;z-index: 9999"
      @click="getNews(nextDate)"
    >测试按钮</button>
    <div class="list">
      <div class="list-item" v-for="item in dataList">
        <p class="item-date">{{ item.date }}</p>
        <div class="item" v-for="child in item.stories">
          <img :src="child.images[0]">
          <p v-html="child.title"></p>
        </div>
      </div>
    </div>
    <loading v-show="!sliderList.length"></loading>
  </div>
</template>

<script>
  import ROOT_URL from '../api/base';
  import MySwiper from './swiper';
  import Loading from './loading';

  export default {
    data () {
      return {
        first: false,
        dataList: [],
        sliderList: [],
        nowDate: -1,
        nextDate: -1,
        scroll: 0
      }
    },
    created () {
      this.getNews();
    },
    mounted () {
      window.addEventListener("scroll", this.onScroll)
    },
    methods: {
      getNews (res = "news/latest") {

        console.log("传进来的值为：", res);
        let url = ROOT_URL + res
        this.$http.get(url).then((res) => {

          let data = {};
          data.date = res.data.date.slice(0, 4) + "/" + res.data.date.slice(4, 6) + "/" + res.data.date.slice(6);
          data.stories = res.data.stories; // 列表数据
          if (!this.first) {
            this.sliderList = res.data.top_stories; // 轮播图数据
            this.first = true;
          }
          this.dataList.push(data);

          this.nowDate = Number(res.data.date)
          this.nextDate = "news/before/" + this.nowDate;
          console.log("下一个要发送的值为", this.nowDate);
          console.log("现在的列表数据为：", this.dataList);
        })
      },
      onScroll () {
        this.scroll = window.scrollY;
        console.log(this.scroll)
      }
    },
    computed: {
      windowWidth () {
        let windowWidth = window.innerWidth;
        return windowWidth + "px";
      }
    },
    components: {
      MySwiper,
      Loading
    }
  }
</script>

<style scoped lang="sass">
  @import "../common/sass/base.sass"

  .home
    width: 100%
    position: absolute
    top: 0
    left: 0
    .slider
      width: 100%
      .slider-wrapper
        width: 100%
        .slider-group
          .slider-item
            display: inline-block
            width: 100vw
            height: #{310px/$rem}rem
            img
              width: 100%
              height: 100%
    .list
      .list-item
        position: relative
        padding-top: #{40px/$rem}rem
        z-index: 99
        .item-date
          position: absolute
          top: 0
          left: #{22px/$rem}rem
          transform: translateY(-50%)
          padding: 0 #{48px/$rem}rem
          border-radius: #{16px/$rem}rem
          background: #ffd300
          font: #{16px/$rem}rem/#{34px/$rem}rem "微软雅黑"
          letter-spacing: 0.1rem
          color: #fff
        .item
          display: flex
          align-items: center
          margin: #{18px/$rem}rem auto
          box-sizing: border-box
          width: #{396px/$rem}rem
          height: #{114px/$rem}rem
          padding: #{12px/$rem}rem 0 #{8px/$rem}rem #{12px/$rem}rem
          font-size: 0
          background-color: #fff
          box-shadow: 0 3px 10px 0 rgba(91, 115, 146, 0.15)
          border-radius: #{5px/$rem}rem
          img
            margin-right: #{18px/$rem}rem
            width: #{90px/$rem}rem
            height: #{90px/$rem}rem
          p
            vertical-align: middle
            display: inline-block
            width: #{266px/$rem}rem
            font: #{17px/$rem}rem/#{23px/$rem}rem "微软雅黑"
            color: #6c829d

</style>
