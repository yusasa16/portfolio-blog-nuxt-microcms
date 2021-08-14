<template lang="pug">
main.max-w-3xl.mx-auto.mt-10.px-4.sm_px-8
  h1.text-4xl {{ microcms.title }}
  p.mt-4.md_mt-6.text-sm.text-right.text-gray-500 {{ microcms.date }}
  div.p-6.mt-4.shadow-xl.rounded-lg.post-article(v-html="microcms.article")
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

<style lang="scss">
.post-article {
  * {
    @apply my-3
  }

  img, svg, video, canvas, audio, iframe, embed, object {
    @apply inline-block;
  }

  a {
    @apply text-blue-400 underline
  }

  pre {
    @apply bg-black text-white text-sm p-2
  }

  h1 {
    &::first-letter {
      @apply text-blue-500
    };

    @apply text-3xl p-3 mt-6 bg-gray-100 border-blue-300 border-l-4
  }

  h2 {
    @apply text-2xl p-3 py-2 mt-5 bg-gray-100 border-blue-300 border-l-2
  }

  h3 {
    @apply text-xl p-3 py-1 mt-4 border-blue-200 border-l-2
  }

  h4 {
    @apply text-lg p-4 py-2 my-3 text-blue-500
  }

  h5 {
    @apply text-base p-4 py-1 my-3 text-blue-500
  }

  ol li,
  ul li {
    @apply my-1
  }

  ol {
    @apply list-decimal list-inside
  }

  ul {
    @apply list-disc list-inside
  }

  iframe {
    max-height: calc(315 / 560 * 100%);

    @apply max-w-full
  }

  blockquote {
    @apply p-3 bg-gray-50 text-gray-500
  }
}
</style>
