<template>
  <form
    class="auth__container"
    @submit.prevent="send()"
  >
    <div class="mb-15">
      <InputText
        v-model="name"
        title="Введите имя"
      />
    </div>
    <FormAvatar/>
    <ButtonPrimary>Завершить регистрацию</ButtonPrimary>
  </form>
</template>

<script>
import InputText from '@/components/InputText.vue';
import ButtonPrimary from '@/components/ButtonPrimary.vue';
import FormAvatar from '@/components/FormAvatar.vue';
/**
 * Компонент формы добавления личных данных
 */
export default {
  name: 'FormCredentials',
  components: {
    InputText,
    ButtonPrimary,
    FormAvatar,
  },
  props: {},
  data() {
    return {
      name: '',
    };
  },
  computed: {},
  methods: {
    send() {
      this.$emit('step');
    },
  },
  errorCaptured() {},
};
</script>

<style lang="sass">
  @import '@/assets/sass/common.sass'
</style>

<docs>
```
<FormCredentials/>
```
</docs>
