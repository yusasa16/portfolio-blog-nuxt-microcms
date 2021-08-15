<template lang="pug">
  li
    NuxtLink.md_text-base.text-black.text-center.leading-10.w-full.p-3.md_px-8.inline-block.duration-300.hover_bg-white(v-bind:to="link")
      | {{ text }}
</template>

<script>
export default {
  props: ['text', 'link']
}
</script>
