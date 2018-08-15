<template>
  <div class="container">
    <TheHeader/>
    <TheAside/>
    <nuxt/>
    <TheFooter/>
  </div>
</template>

<script>
  import TheHeader from '@/components/TheHeader.vue';
  import TheAside from '@/components/TheAside.vue';
  import TheFooter from '@/components/TheFooter.vue';
  export default {
    components: {
      TheHeader,
      TheAside,
      TheFooter,
    },
  };
</script>

<style lang="sass">
  @import "normalize.css"
  @import "@/assets/sass/common.sass"
  .container
    position: relative
    min-height: 100vh
    padding-bottom: 69px
</style>

