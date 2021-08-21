<template lang="pug">
div
  header.w-screen.bg-white.fixed.top-0.z-50
    dev.max-w-screen-lg.mx-auto.flex.justify-center.items-center
      div
        h1
          NuxtLink.text-black.font-lilyscriptone.text-4xl.text-gray-700.md_hover_text-main-100.py-2.duration-300.inline-block(to="/") sakutech

      div.header-hamburger(
        :class="{'show' : show}"
        @click="showList()")
        span
        span
        span

    //- ハンバーガーボタンクリック後表示ナビ
    HeaderNav.w-screen.fixed(:show="show" @close="closeNav")

  //- ヘッダーの高さ分padding設定
  div(v-bind:style="{'padding-top': headerHeight}")
</template>

<script>
export default {
  data () {
    return {
      show: false,
      headerHeight: null
    }
  },

  mounted () {
    this.headerHeight = document.querySelector('header').clientHeight
    this.headerHeight = this.headerHeight + 'px'
  },

  methods: {
    showList () {
      if (this.show) {
        this.show = false
      } else {
        this.show = true
      }
    },

    closeNav() {
      this.show = false
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  .header-hamburger {
    position: absolute;
    right: 0;
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
      background-color: #000;
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

    &.show {
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
