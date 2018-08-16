<template>
  <AsideAuth
    :status="status"
    name="signin"
    title="Вход"
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
        <ButtonPrimary>Войти</ButtonPrimary>
      </form>

      <AsideSocial/>
    </template>

  </AsideAuth>
</template>

<script>
import AsideAuth from '@/components/AsideAuth.vue';
import InputText from '@/components/InputText.vue';
import ButtonPrimary from '@/components/ButtonPrimary.vue';
import AsideSocial from '@/components/AsideSocial.vue';
/**
 * Компонент сайдбара для входа
 */
export default {
  name: 'AsideSignin',
  components: {
    AsideAuth,
    InputText,
    ButtonPrimary,
    AsideSocial,
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
      /**
       * Почта пользователя
       * @type {String}
       */
      email: '',
    };
  },

  methods: {
    send(scope) {
      scope.auth();
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
