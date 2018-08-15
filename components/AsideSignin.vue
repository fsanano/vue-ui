<template>
  <AsideBase
    :status="status"
    title="Вход"
    name="signin"
  >
    <form class="auth__container">
      <div class="mb-15">
        <InputText
          v-model="email"
          title="Электронная почта"
        />
      </div>
      <div class="mb-15">
        <ButtonPrimary>Войти</ButtonPrimary>
      </div>
    </form>
  </AsideBase>
</template>

<script>
import AsideBase from '@/components/AsideBase.vue';
import InputText from '@/components/InputText.vue';
import ButtonPrimary from '@/components/ButtonPrimary.vue';
/**
 * Компонент сайдбара для входа
 */
export default {
  name: 'AsideSignin',
  components: {
    AsideBase,
    InputText,
    ButtonPrimary,
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
    return {
      email: '',
    };
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
  @import '@/assets/sass/vars.sass'
</style>

<docs>
```
<AsideSignin/>
```
</docs>
