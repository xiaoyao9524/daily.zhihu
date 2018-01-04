<template>
  <div class="rings-loading">
    <div class="svg-wrapper">
      <svg class="loader-circular" viewBox="25 25 50 50">
        <circle class="loader-path"
                cx="50"
                cy="50"
                r="20"
                fill="none"
                stroke-width="5"
                stroke-miterlimit="10"
        ></circle>
      </svg>
    </div>
    <p class="infinite-scroll-text">正在加载中......</p>
  </div>
</template>

<script>
    export default {
        name: "rings-loading"
    }
</script>

<style scoped>
  .rings-loading {
    position: relative;
    z-index: 99999;
    width: 100%;
    height: 100px;
    text-align: center;
    overflow: hidden;
  }
  .svg-wrapper {
    position: absolute;
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 30px;
  }
  .infinite-scroll-text {
    padding: 50px 0 20px 16px;
    font-size: 16px;
  }
  .loader {
    width: 30px;
    height: 30px;
    position: relative;
  }
  .loader-path {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
    stroke-linecap: round;
  }
  .loader-circular {
    width: 30px;
    height: 30px;
    animation: rotate 2s linear infinite;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124;
    }
  }
  @keyframes color {
    0%,
    100% {
      stroke: #FFD300;
    }
    40% {
      stroke: #5B7492;
    }
    66% {
      stroke: #FFD300;
    }
    80%,
    90% {
      stroke: #acb9c8;
    }
  }
</style>
