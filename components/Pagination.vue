<template lang="pug">
  div
    ul.flex.max-w-screen-lg.mx-auto.justify-around.md_justify-center
      li.md_mx-20
        NuxtLink.block.p-3.bg-gray-200(:to="routingPath + prevPage" :class="{'disabled': !existPrev}") 前
      li.md_mx-20
        p.p-3(v-html="currentPage")
      li.md_mx-20
        NuxtLink.block.p-3.bg-gray-200(:to="routingPath + nextPage" :class="{'disabled': !existNext}") 次

</template>

<script>
export default {
  props: ['currentPage', 'contentsLength', 'contentsType'],

  data() {
    return {
      prevPage: Number(this.currentPage) - 1,
      nextPage: Number(this.currentPage) + 1,
      routingPath: `${this.contentsType}/page/`,
      existPrev: true,
      existNext: true
    }
  },

  mounted() {
    if(this.currentPage <= 1) {
      this.existPrev = false
    } else {
      this.existPrev = true
    }

    this.existNext = this.contentsLength

  console.log(this.contentsLength)
  }
}
</script>

<style lang="scss" scoped>
.disabled {
  pointer-events: none;
  background-color: #fff;
}
</style>
