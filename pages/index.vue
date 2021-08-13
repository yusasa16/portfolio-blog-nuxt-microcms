<template lang="pug">
  div
    BlogCards.mt-10(:blogs="microcms.contents")
    Pagination.mt-10(:currentPage="currentPage" :contentsLength="contentsLength")
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params }) {
    const page = params.p || '1'
    const limit = 12
    const { data } = await axios.get(
      `https://sakuteck.microcms.io/api/v1/dummy?limit=${limit}&offset=${(page - 1) * limit}`,
      {
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
    console.log(data)

    const contentsLength = (data) => {
      if(data.length < limit) {
        return false
      }else{
        return true
      }
    }

    // return
    return {
      microcms: data,
      currentPage: page,
      contentsLength : contentsLength(data)
    }
  }
}
</script>
