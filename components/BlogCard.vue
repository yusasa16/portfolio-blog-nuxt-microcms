<template lang="pug">
    div.w-full.md_w-4in12.mb-4.md_mb-8
      div.w-full.h-full.px-4
        NuxtLink.block.h-full.py-4.px-6.rounded-lg.shadow-md.hover_bg-blue-50.duration-300(:to='id')
          div.flex.justify-start.flex-wrap.items-center
            div.bg-blue-400.text-white.text-sm.my-1.mr-8
              p.py-1.px-2 {{ category }}
            div.text-gray-500.text-sm
              p {{ date }}
          p.mt-4.text-lg {{ title }}
</template>

<script>
export default {
  props: ['date', 'category', 'title', 'id']
}
</script>
