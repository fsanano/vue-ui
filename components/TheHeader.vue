<template>
  <header class="header__container">
    <div class="container-fluid d-flex">
      <div class="header__logo">
        <img
          src="~/assets/img/logo.png"
          alt="logo">
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  components: {},
  mixins: [],
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  beforeCreate() {},
  created() {},
  fetch() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {},
  errorCaptured() {},
};
</script>

<style lang="sass">
  @import '@/assets/sass/vars.sass'
  .header__container
    height: 90px
    border: 1px solid rgba(white, .15)

  .header__logo
    padding: 15px 0
    width: 89px
    img
      width: 100%
</style>

<docs>
```
<TheHeader/>
```
</docs>
