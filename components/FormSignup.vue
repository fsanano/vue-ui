<template>
  <form
    class="auth__container"
    @submit.prevent="send()"
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
</template>

<script>
import InputText from '@/components/InputText.vue';
import InputCheckbox from '@/components/InputCheckbox.vue';
import ButtonPrimary from '@/components/ButtonPrimary.vue';
/**
 * Компонент формы регистрации
 */
export default {
  name: 'FormSignup',
  components: {
    InputText,
    InputCheckbox,
    ButtonPrimary,
  },
  data() {
    return {
      /**
       * Почта пользователя
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
    send() {
      this.$emit('step');
      },
  },
};
</script>

<style lang="sass">
  @import '@/assets/sass/common.sass'
</style>

<docs>
```
<FormSignup/>
```
</docs>
