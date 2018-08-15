<template>
  <AsideBase
    :status="status"
    title="Регистарция"
    name="signup"
  >
    <form class="auth__container">
      <div class="mb-15">
        <InputText
          v-model="email"
          title="Электронная почта"
        />
      </div>
      <ButtonPrimary>Регистрация</ButtonPrimary>
    </form>

    <AsideSocial/>
    <AsideStock>
      Зарегистрируйся и получи одну игру бесплатно!
    </AsideStock>
  </AsideBase>
</template>

<script>
import AsideBase from '@/components/AsideBase.vue';
import InputText from '@/components/InputText.vue';
import ButtonPrimary from '@/components/ButtonPrimary.vue';
import AsideSocial from '@/components/AsideSocial.vue';
import AsideStock from '@/components/AsideStock.vue';
/**
 * Компонент сайдбара для регистрации
 */
export default {
  name: 'AsideSignup',
  components: {
    AsideBase,
    InputText,
    ButtonPrimary,
    AsideSocial,
    AsideStock,
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
