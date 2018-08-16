<template>
  <AsideAuth
    :status="status"
    title="Вход"
    name="signin"
  >
    <form
      slot-scope="scope"
      class="auth__container"
      @submit.prevent="scope.signIn"
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
    };
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
