<template>
  <div class="social__container">
    <div class="social__title">
      Через соц. сети
    </div>
    <ButtonLightSocial name="vk">Вконтакте</ButtonLightSocial>
  </div>
</template>

<script>
import ButtonLightSocial from '@/components/ButtonLightSocial';
/**
 * Компонент входа через социальные сети
 */
export default {
  name: 'AsideSocial',
  components: {
    ButtonLightSocial,
  },
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
  .social__container
    padding: 30px
    box-shadow: inset 0 5px 0 0 rgba($primary-color-invert, .25)
    border-top: 1px solid #000;

  .social__title
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 26px
    font-weight: 700
    margin-bottom: 10px
</style>

<docs>
```
<AsideSocial/>
```
</docs>
