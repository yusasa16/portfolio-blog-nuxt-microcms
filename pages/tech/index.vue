<template lang="pug">
  div
    BlogArchive(:microcms="microcms" :contentsType="contentsType")
    //- Pagination.mt-10(:currentPage="currentPage" :contentsLength="contentsLength" contentsType="/tech")
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params }) {
    const page = params.p || '1'
    const limit = 12
    const { data } = await axios.get(
      `https://yu-sakutech.microcms.io/api/v1/tech?limit=${limit}&offset=${(page - 1) * limit}`,
      {
        headers: { 'X-API-KEY': 'd941944c-cd1a-4ba0-bbd6-27e0eea69e34' }
      }
    );

    const contentsLength = (data) => {
      if(data.contents.length < limit) {
        return false
      }else{
        return true
      }
    }

    // return
    return {
      microcms: data,
      currentPage: page,
      contentsLength: contentsLength(data),
      contentsType: 'tech'
    }
  },

  mounted() {
    // 投稿日時・出力用文字列変更
    this.microcms.contents.forEach(element => {
      element.date = this.$dateFormat(element.date)
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
