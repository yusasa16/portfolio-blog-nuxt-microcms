<template lang="pug">
  BlogCards.mt-10(:blogs="microcms.contents")
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
    );

    // 投稿日時・出力用文字列変更
    data.contents.forEach(element => {
      let time = Date.parse(element.date)
      let date = new Date(time);
      let strDate = `${date.getFullYear()}年${date.getMonth()}月${date.getDate()}日`;
      element.date = strDate;
    });

    // return
    return {
      microcms: data
    }
  }
}
</script>
