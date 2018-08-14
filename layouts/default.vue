<template>
  <div class="container">
    <TheHeader/>
    <nuxt/>
  </div>
</template>

<script>
  import TheHeader from '@/components/TheHeader.vue';
  export default {
    components: {
      TheHeader,
    },
  };
</script>

<style lang="sass">
  @import "normalize.css"
  @import "@/assets/sass/common.sass"
</style>

