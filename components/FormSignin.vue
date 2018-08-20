<template>
  <form
    class="aside__wrap"
    @submit.prevent="send()"
  >
    <div class="mb-15">
      <InputText
        v-model="email"
        title="Электронная почта"
      />
    </div>
    <ButtonPrimary>Войти</ButtonPrimary>
  </form>
</template>

<script>
import InputText from '@/components/InputText.vue';
import ButtonPrimary from '@/components/ButtonPrimary.vue';
/**
 * Компонент формы входа
 */
export default {
  name: 'FormSignin',
  components: {
    InputText,
    ButtonPrimary,
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
<FormSignin/>
```
</docs>
