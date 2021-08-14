<template lang="pug">
  div
    div.w-10in12.w-screen-lg.py-32.mx-auto.flex.justify-center.flex-wrap.text-center
      div.w-full.md_w-5in12.max-w-sm.mb-12.md_mb-8
        div.w-full.h-full.px-4
          NuxtLink.block.h-full.py-20.px-6.rounded-lg.bg-green-200.shadow-md.hover_bg-green-300.duration-300(to="/tech")
            <svg class="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            p.mt-4.text-lg 技術ブログ
      div.w-full.md_w-5in12.max-w-sm.mb-4.md_mb-8
        div.w-full.h-full.px-4
          NuxtLink.block.h-full.py-20.px-6.rounded-lg.bg-yellow-200.shadow-md.hover_bg-yellow-300.duration-300(to="/hobby")
            <svg class="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path></svg>
            p.mt-4.text-lg 趣味ブログ
</template>

<script>
export default {}
</script>
