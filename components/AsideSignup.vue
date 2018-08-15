<template>
  <AsideBase
    :status="status"
    title="Регистарция"
    name="signup"
  >
    signin
  </AsideBase>
</template>

<script>
import AsideBase from '@/components/AsideBase.vue';
/**
 * Компонент сайдбара для регистрации
 */
export default {
  name: 'AsideSignup',
  components: {
    AsideBase,
  },
  mixins: [],
  props: {
    status: {
      type: Boolean,
      require: true,
      default: false,
    },
  },
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

<style lang="sass" scoped>
  @import '@/assets/sass/common.sass'
</style>

<docs>
```
<AsideSignup/>
```
</docs>
