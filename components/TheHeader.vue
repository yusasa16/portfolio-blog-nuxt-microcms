<template>
  <header id="header">
    <div class="header-inner">
      <div class="header-inner__logo">
        <h1><a href="__URL__">temp</a></h1>
      </div>
      <nav v-if="width >= 767" class="header-inner__nav pc-only">
        <ul>
          <li><a href="__URL__">nav1</a></li>
          <li><a href="__URL__">nav2</a></li>
          <li><a href="__URL__">nav3</a></li>
          <li><a href="__URL__">nav4</a></li>
        </ul>
      </nav>
      <div v-if="width < 767" class="header-inner__hamburger sp-only" @click="showList()">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div v-if="show" class="header-modal on">
      <nav class="header-modal__nav">
        <ul>
          <li><a href="__URL__">nav1</a></li>
          <li><a href="__URL__">nav2</a></li>
          <li><a href="__URL__">nav3</a></li>
          <li><a href="__URL__">nav4</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      width: window.innerWidth,
      height: window.innerHeight
    }
  },

  mounted () {
    window.addEventListener('resize', this.handleResize)
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
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 48px;
  background-color: #009ccb;
  user-select: none;
  position: fixed;
  top: 0;
  z-index: 100;

  .header-inner {
    max-width: 980px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    &__logo {
      padding-left: 24px;

      h1 {
        a {
          color: #fff;
          font-size: 3rem;
          font-family: 'Barlow', sans-serif;
          font-weight: 100;
          line-height: 48px;
        }
      }
    }

    &__nav {
      ul {
        list-style: none;
        display: flex;
        height: 100%;

        li {
          height: 100%;

          a {
            color: #fff;
            font-size: 1.6rem;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            width: 90px;
            height: 100%;
            line-height: 48px;

            &:hover {
              background-color: rgba($color: #fff, $alpha: 0.4);
              transition: all 600ms;
            }
          }
        }
      }
    }

    &__hamburger {
      position: relative;
      width: 50px;
      height: 48px;
      margin-right: 12px;
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

  .header-modal {
    width: 100%;
    height: 0;
    overflow: hidden;
    background-color: #009ccb;
    transition: 500ms;

    &.on {
      height: calc(100vh - 48px);
    }

    &__nav {
      margin: 0 24px;
      padding-top: 60px;

      ul {
        list-style: none;

        li {
          margin-bottom: 18px;
        }

        a {
          font-size: 3rem;
          color: #fff;
          font-weight: 700;
          display: inline-block;
          width: 100%;
        }
      }
    }
  }
}
</style>
