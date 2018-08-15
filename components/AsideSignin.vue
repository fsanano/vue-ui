<template>
  <AsideBase
    :status="status"
    title="Вход"
    name="signin"
  >
    <form
      v-if="emailSended"
      class="auth__container"
      @submit.prevent="confirmCode"
    >
      <div class="d-flex align-items-center mb-15">
        <InputCode
          v-model="code"
          title="Код"
          class="mr-10"
        />
        <ButtonLight
          :is-disabled="countdown > 0"
          typeof="code"
          @click.prevent.native="startCountdown"
        >
          <span
            v-if="countdown"
            class="btn__countdown"
            v-html="countdown"
          />
          Отправить еще раз
        </ButtonLight>
      </div>
      <ButtonPrimary
        class="mb-15"
        typeof="full"
      >
        Продолжить
      </ButtonPrimary>
      <ButtonLight typeof="full">Ввести другой email</ButtonLight>

    </form>
    <template v-else>
      <form
        class="auth__container"
        @submit.prevent="signIn"
      >
        <div class="mb-15">
          <InputText
            v-model="email"
            title="Электронная почта"
          />
        </div>
        <ButtonPrimary>Войти</ButtonPrimary>
      </form>

      <AsideSocial/>
    </template>
  </AsideBase>
</template>

<script>
import AsideBase from '@/components/AsideBase.vue';
import InputText from '@/components/InputText.vue';
import InputCode from '@/components/InputCode.vue';
import ButtonPrimary from '@/components/ButtonPrimary.vue';
import ButtonLight from '@/components/ButtonLight.vue';
import AsideSocial from '@/components/AsideSocial.vue';
/**
 * Компонент сайдбара для входа
 */
export default {
  name: 'AsideSignin',
  components: {
    AsideBase,
    InputText,
    InputCode,
    ButtonPrimary,
    ButtonLight,
    AsideSocial,
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
      /**
       * Почта пользовател
       * @type {String}
       */
      email: '',
      /**
       * Код подтверждения
       * @type {String}
       */
      code: '',

      countdown: 60,
      /**
       * Флаг состояния формы
       * @type {Boolean}
       */
      emailSended: false,
    };
  },
  methods: {
    signIn() {
      this.emailSended = true;
      this.startCountdown();
    },
    confirmCode() {
      this.emailSended = false;
    },
    startCountdown() {
      this.countdown = 60;
      const interval = setInterval(() => {
        if (this.countdown === 0) {
          clearInterval(interval);
        } else {
          this.countdown = this.countdown - 1;
        }
      }, 1000);
    },
  },
};
</script>

<style lang="sass">
  @import '@/assets/sass/vars.sass'
  .btn__countdown
    width: 100%
    margin-bottom: 5px
    font-size: 16px
    color: white
</style>

<docs>
```
<AsideSignin/>
```
</docs>
