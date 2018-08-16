<template>
  <AsideAuth
    :status="status"
    name="signup"
    title="Регистарция"
  >
    <template slot-scope="scope">
      <form
        class="auth__container"
        @submit.prevent="send(scope)"
      >
        <div class="mb-15">
          <InputText
            v-model="email"
            title="Электронная почта"
          />
        </div>
        <div class="mb-15">
          <InputCheckbox v-model="userAgreement">
            Я принимаю
            <a
              href=""
              class="aside__link"
            >
              условия соглашения
            </a>
          </InputCheckbox>
        </div>
        <ButtonPrimary>Регистрация</ButtonPrimary>
      </form>

      <AsideSocial/>

      <AsideStock>
        Зарегистрируйся и получи одну игру бесплатно!
      </AsideStock>
    </template>

  </AsideAuth>
</template>

<script>
import AsideAuth from '@/components/AsideAuth.vue';
import InputText from '@/components/InputText.vue';
import InputCheckbox from '@/components/InputCheckbox.vue';
import ButtonPrimary from '@/components/ButtonPrimary.vue';
import AsideSocial from '@/components/AsideSocial.vue';
import AsideStock from '@/components/AsideStock.vue';
/**
 * Компонент сайдбара для регистрации
 */
export default {
  name: 'AsideSignup',
  components: {
    AsideAuth,
    InputText,
    InputCheckbox,
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
    return {
      /**
       * Почта пользовател
       * @type {String}
       */
      email: '',
      /**
       * Флаг состояния подтверждения условия соглашения
       * @type {Boolean}
       */
      userAgreement: false,
    };
  },
  methods: {
    send(scope) {
      scope.auth();
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
