<template>
  <div class="container">
    <TheHeader/>
    <TheAside/>
    <nuxt/>
  </div>
</template>

<script>
  import TheHeader from '@/components/TheHeader.vue';
  import TheAside from '@/components/TheAside.vue';
  export default {
    components: {
      TheHeader,
      TheAside,
    },
  };
</script>

<style lang="sass">
  @import "normalize.css"
  @import "@/assets/sass/common.sass"
</style>

