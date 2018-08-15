<template>
  <div class="footer__container">
    <div class="container-fluid d-flex justify-content-between align-items-center h-100">
      <div class="footer__copy">2018 © X-WIN — будь первым!</div>
      <div class="footer__links">
        <a
          href="/"
          class="text--link text--accent"
        >
          Пользовательское соглашение
        </a>
        <a
          href="/"
          class="text--link text--accent"
        >
          Политика конфиденциальности
        </a>
      </div>
      <div class="footer__btn--vk">
        <IconBase
          name="vk"
          size="small"
        />
        <div class="text--link">Мы в Вконтакте</div>
      </div>
    </div>
  </div>
</template>

<script>
import IconBase from '@/components/IconBase.vue';
/**
 * Компонент фотера
 */
export default {
  name: 'TheFooter',
  components: {
    IconBase,
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
  @import '@/assets/sass/common.sass'
  .footer__container
    position: absolute
    bottom: 0
    left: 0
    width: 100%
    height: 69px
    border-top: 1px solid rgba($primary-color, .15)
  .footer__copy
    font-size: 20px

  .footer__links
    display: flex
    flex-flow: column nowrap

  .footer__btn--vk
    display: flex
    align-items: center
    height: 100%
    padding: 0 25px
    border-left: 1px solid rgba($primary-color, .15)
    border-right: 1px solid rgba($primary-color, .15)
    .text--link
      margin-left: 5px
</style>

<docs>
```
<TheFooter/>
```
</docs>
