<template>
  <main class="main">
    <h1 class="title">{{ title }}</h1>
    <p class="publishedAt">{{ date }}</p>
    <div class="post" v-html="article"></div>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://sakuteck.microcms.io/api/v1/blog/${params.slug}`,
      {
        headers: { 'X-API-KEY': '5a2b1141-dbfa-4ada-8216-e68624f54486' }
      }
    )
    return data
  }
}
</script>
