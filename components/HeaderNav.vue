<template lang="pug">
nav
  ul
    HeaderNavLink(text="tech", link="/tech" @close="closeNav")
    HeaderNavLink(text="daily", link="/hobby" @close="closeNav")
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
