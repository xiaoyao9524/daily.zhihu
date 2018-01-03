<template>
  <div class="slider-wrapper" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots">
      <span class="dot" v-for="(item, index) in dots"
            :class="{active: currentPageIndex === index}"
      ></span>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';

  export default {
    name: "slider",
    props: {
      loop: {
        type: Boolean,
        default: true
      },
      autoPlay: { // 是否自动播放
        type: Boolean,
        default: true
      },
      interval: { // 播放的间隔
        type: Number,
        default: 4000
      }
    },
    data () {
      return {
        dots: [],
        currentPageIndex: 0
      }
    },
    mounted () {
      if (this.loop) {
        this.$refs.sliderGroup.style.width = "700%";
      }
      this._setSliderWidth();
      setTimeout(() => {
        this.slider = new BScroll(this.$refs.slider, {
          scrollX: true, // 开启横向滚动
          scrollY: false, // 关闭纵向滚动
          momentum: false, // 当快速在屏幕上滑动一段距离的时候，会根据滑动的距离和时间计算出动量，并生成滚动动画。设置为 true 则开启动画
          snap: true,
          snapLoop: true,
          snapThreshold: 0.3,
          snapSpeed: 400 // 轮播图切换所需时间
        });
      }, 20);
    },
    methods: {
      _setSliderWidth () {
        this.children = this.$refs.sliderGroup.children;
        console.log(this.children.length);
        let width = 0;
        let sliderWidth = this.$refs.slider.offsetWidth;
      }
    }
  }
</script>

<style scoped lang="sass">
  .slider-group
    width: 500%
</style>
