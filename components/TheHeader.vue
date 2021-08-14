<template lang="pug">
div
  header.w-screen.bg-blue-400.fixed.top-0.z-50
    dev.max-w-screen-lg.mx-auto.flex.justify-between.items-center
      div.pl-3.md_pl-16
        h1.text-3xl
          NuxtLink.text-white.font-thin.font-barlow(to="/") sakutech
      HeaderNav(v-if="width >= 767")

      div.header-hamburger(v-if="width < 767", @click="showList()")
        span
        span
        span
    HeaderNav.w-screen.bg-blue-400.absolute(v-if="show && width <= 767")
  div(v-bind:style="{'padding-top': headerHeight}")
</template>

<script>
export default {
  data () {
    return {
      show: false,
      width: window.innerWidth,
      height: window.innerHeight,
      headerHeight: null
    }
  },

  mounted () {
    window.addEventListener('resize', this.handleResize)

    this.headerHeight = document.querySelector('header').clientHeight
    this.headerHeight = this.headerHeight + 'px'
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  },

  methods: {
    showList () {
      if (this.show) {
        this.show = false
      } else {
        this.show = true
      }
    },

    handleResize () {
      this.width = window.innerWidth
      this.height = window.innerHeight
    },
  }
}
</script>

<style lang="scss" scoped>
header {
  .header-hamburger {
    position: relative;
    width: 50px;
    height: 48px;
    background: none;
    border: none;
    appearance: none;
    cursor: pointer;
    transition: all 400ms;
    text-align: center;

    span {
      position: absolute;
      left: 12px;
      width: 27px;
      height: 3px;
      background-color: #fff;
      border-radius: 4px;
      display: inline-block;
      transition: all 400ms;

      &:nth-of-type(1) {
        top: 14px;
      }

      &:nth-of-type(2) {
        top: 23px;
      }

      &:nth-of-type(3) {
        bottom: 13px;
      }
    }

    &.on {
      span:nth-of-type(1) {
        transform: translateY(9px) rotate(-45deg);
      }

      span:nth-of-type(2) {
        opacity: 0;
      }

      span:nth-of-type(3) {
        transform: translateY(-10px) rotate(45deg);
      }
    }
  }
}
</style>
