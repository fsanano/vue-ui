<template>
  <div
    class="form__avatar"
    @submit.prevent="send()"
  >
    <div class="avatar__title">
      Выберите аватар или
      <label class="avatar__label">
        <input
          type="file"
          class="d-none"
          value=""
        >
      </label>
    </div>
    .avatar__list
    
    <ButtonPrimary>Завершить регистрацию</ButtonPrimary>
  </div>
</template>

<script>
import InputText from '@/components/InputText.vue';
import ButtonPrimary from '@/components/ButtonPrimary.vue';
/**
 * Компонент формы добавления личных данных
 */
export default {
  name: 'FormCredentials',
  components: {
    InputText,
    ButtonPrimary,
  },
  props: {},
  data() {
    return {
      avatar: '',
      custom: '',
      list: [],
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
