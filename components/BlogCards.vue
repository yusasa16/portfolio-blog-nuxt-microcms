<template lang="pug">
  dev.w-10in12.w-screen-lg.mx-auto.flex.justify-between.flex-wrap
    BlogCard(v-for="blog in blogs" :date="blog.date" :category="blog.category" :title="blog.title")
</template>

<script>
export default {
  data() {
    return {
      blogs: [
        {
          'date': '2021/01/01',
          'category': 'カテゴリー1',
          'title': '記事1記事1記事1記事1記事1記事1記事1',
        },
        {
          'date': '2021/01/02',
          'category': 'カテゴリー2',
          'title': '記事2記事2記事2記事2記事2記事2記事2',
        },
        {
          'date': '2021/01/03',
          'category': 'カテゴリー3',
          'title': '記事3記事3記事3記事3記事3記事3記事3',
        },
        {
          'date': '2021/01/04',
          'category': 'カテゴリー4',
          'title': '記事4記事4記事4記事4記事4記事4記事4',
        },
        {
          'date': '2021/01/05',
          'category': 'カテゴリー5',
          'title': '記事5記事5記事5記事5記事5記事5記事5',
        },
        {
          'date': '2021/01/06',
          'category': 'カテゴリー6',
          'title': '記事6記事6記事6記事6記事6記事6記事6',
        },
      ]
    }
  }
}
</script>
