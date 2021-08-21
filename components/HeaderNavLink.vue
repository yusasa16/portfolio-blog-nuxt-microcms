<template lang="pug">
  li
    NuxtLink.md_text-base.text-black.md_hover_text-main-100.text-center.leading-10.w-full.p-3.md_px-8.inline-block.duration-300.hover_bg-white(
      v-bind:to="link"
      @click.native="close")
      | {{ text }}
</template>

<script>
export default {
  props: ['text', 'link'],

  methods: {
    close: function() {
      this.$emit('close');
    }
  }
}
</script>
