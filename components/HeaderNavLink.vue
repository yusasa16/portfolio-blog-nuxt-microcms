<template lang="pug">
  li
    NuxtLink.text-3xl.md_text-base.text-white.leading-10.w-full.md_w-auto.p-5.md_py-3.md_px-8.inline-block.duration-300.hover_bg-blue-300(v-bind:to="link")
      | {{ text }}
</template>

<script>
export default {
  props: ['text', 'link']
}
</script>
