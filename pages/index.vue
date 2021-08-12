<template lang="pug">
  BlogCards.mt-10(:blogs="contents")
</template>

<script>
import axios from 'axios'

export default {
  async asyncData() {
    const { data } = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      'https://sakuteck.microcms.io/api/v1/blog',
      {
        // your-api-key部分は自分のapi-keyに置き換えてください
        headers: { 'X-API-KEY': '5a2b1141-dbfa-4ada-8216-e68624f54486' }
      }
    )
    return data
  }
}
</script>
