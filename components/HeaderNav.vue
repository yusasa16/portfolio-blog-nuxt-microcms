<template lang="pug">
nav(:class="{'show' : show}")
  ul.bg-white
    HeaderNavLink(text="tech", link="/tech" @close="closeNav")
    HeaderNavLink(text="daily", link="/daily" @close="closeNav")
</template>

<script>
export default {
  props: ['show'],

  methods: {
    closeNav: function() {
      this.$emit('close');
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  height: 0;
  overflow: hidden;
  // animation: accordion-close 600ms;

  // @keyframes accordion-close {
  //   from {
  //     height: 100%;
  //   }

  //   to {
  //     height: 0;
  //   }
  // }

  &.show {
    height: 100%;
    animation: accordion-open 1000ms;

    @keyframes accordion-open {
      from {
        height: 0;
      }

      to {
        height: 100%;
      }
    }
  }
}
</style>
