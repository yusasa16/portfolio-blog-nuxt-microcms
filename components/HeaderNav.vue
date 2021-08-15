<template lang="pug">
nav
  ul
    HeaderNavLink(text="tech", link="/tech" @close="closeNav")
    HeaderNavLink(text="daily", link="/daily" @close="closeNav")
</template>

<script>
export default {
  methods: {
    closeNav: function() {
      this.$emit('close');
    }
  }
}
</script>
