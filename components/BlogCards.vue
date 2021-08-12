<template lang="pug">
  dev.w-10in12.w-screen-lg.mx-auto.flex.justify-between.flex-wrap
    BlogCard(v-for="blog in blogs" :date="blog.date" :category="blog.category.contentname" :title="blog.title" :id="blog.id")
</template>

<script>
export default {
  props: ['blogs']
}
</script>
