<template lang="pug">
main
  BlogSingle(:microcms="microcms")
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://yu-sakutech.microcms.io/api/v1/hobby/${params.slug}`,
      {
        headers: { 'X-API-KEY': 'd941944c-cd1a-4ba0-bbd6-27e0eea69e34' }
      }
    )

    return {
      microcms: data
    }
  },

  mounted() {
    // 投稿日時・出力用文字列変更
    this.microcms.date = this.$dateFormat(this.microcms.date)
  }
}
</script>

<style lang="scss">

</style>
