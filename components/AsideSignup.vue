<template>
  <AsideBase
    :status="status"
    name="signup"
    title="Регистарция"
  >
    <template>
      <transition
        name="auth"
        mode="out-in"
      >
        <div
          v-if="step === 'form'"
          key="form"
        >
          <FormSignup @step="changeStep('code')"/>
          <FormSocial/>
          <TheStock>Зарегистрируйся и получи одну игру бесплатно!</TheStock>
        </div>

        <FormCode
          v-if="step === 'code'"
          key="code"
          @step="changeStep('credentials')"
        />

        <FormCredentials
          v-if="step === 'credentials'"
          key="credentials"
          @step="close"
        />

      </transition>
    </template>

  </AsideBase>
</template>

<script>
import AsideBase from '@/components/AsideBase.vue';
import FormSignup from '@/components/FormSignup.vue';
import FormSocial from '@/components/FormSocial.vue';
import FormCredentials from '@/components/FormCredentials.vue';
import TheStock from '@/components/TheStock.vue';
import FormCode from '@/components/FormCode.vue';
/**
 * Компонент сайдбара для регистрации
 */
export default {
  name: 'AsideSignup',
  components: {
    AsideBase,
    FormSignup,
    FormSocial,
    FormCredentials,
    TheStock,
    FormCode,
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
      step: 'form',
    };
  },
  methods: {
    /**
     * Метод изменения активного шага формы регистрации
     * @param  {String} step [Название формы]
     */
    changeStep(step) {
      this.step = step;
    },
    close() {
      this.$store.dispatch('aside/setAsideStatus', { name:'signup', status: false});
    },
  },
};
</script>

<style lang="sass" scoped>
  @import '@/assets/sass/common.sass'
  .aside__link
    color: $accent
    text-decoration: none
</style>

<docs>
```
<AsideSignup/>
```
</docs>
