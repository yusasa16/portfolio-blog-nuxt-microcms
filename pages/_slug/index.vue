<template>
  <main class="main">
    <h1 class="title">{{ microcms.title }}</h1>
    <p class="publishedAt">{{ microcms.date }}</p>
    <div class="post" v-html="microcms.article"></div>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://sakuteck.microcms.io/api/v1/dummy/${params.slug}`,
      {
        headers: { 'X-API-KEY': '5a2b1141-dbfa-4ada-8216-e68624f54486' }
      }
    )

    // 投稿日時・出力用文字列変更
    let time = Date.parse(data.date);
    let date = new Date(time);
    let strDate = `${date.getFullYear()}年${date.getMonth()}月${date.getDate()}日`;
    data.date = strDate;

    return {
      microcms: data
    }
  },
}
</script>
