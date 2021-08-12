<template lang="pug">
div
  div.w-10in12.w-screen-lg.mx-auto.flex.justify-between.flex-wrap.after-content
    BlogCard(v-for="blog in blogs" :date="blog.date" :category="blog.category.contentname" :title="blog.title" :id="blog.id")
</template>

<script>
export default {
  props: ['blogs']
}
</script>

<style lang="scss" scoped>
div.after-content {
  &::after {
    content: '';
    display: block;
    width: calc(1 / 3 * 100%);
  }
}
</style>
