<template lang="pug">
main
  BlogSingle(:microcms="microcms")
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://yu-sakutech.microcms.io/api/v1/tech/${params.slug}`,
      {
        headers: { 'X-API-KEY': 'd941944c-cd1a-4ba0-bbd6-27e0eea69e34' }
      }
    )

    // 投稿日時・出力用文字列変更
    let time = Date.parse(data.date);
    let date = new Date(time);
    let strDate = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
    data.date = strDate;

    return {
      microcms: data
    }
  },
}
</script>

<style lang="scss">

</style>
