<template>
  <AsideBase
    :status="status"
    name="signin"
    title="Вход"
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
          <FormSignin
            @step="changeStep('code')"
          />
          <FormSocial/>
        </div>

        <FormCode
          v-if="step === 'code'"
          key="code"
          @step="close"
        />
      </transition>
    </template>

  </AsideBase>
</template>

<script>
import AsideBase from '@/components/AsideBase.vue';
import FormSignin from '@/components/FormSignin.vue';
import FormCode from '@/components/FormCode.vue';
import FormSocial from '@/components/FormSocial.vue';
/**
 * Компонент сайдбара для входа
 */
export default {
  name: 'AsideSignin',
  components: {
    AsideBase,
    FormSignin,
    FormCode,
    FormSocial,
  },
  mixins: [],
  props: {
    /**
     * Флаг видимости сайдбара для входа
     */
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
    changeStep(step) {
      this.step = step;
    },
    close() {
      this.$store.dispatch('aside/setAsideStatus', { name:'signin', status: false});
    },
  },

};
</script>

<style lang="sass">
  @import '@/assets/sass/vars.sass'
</style>

<docs>
```
<AsideSignin/>
```
</docs>
