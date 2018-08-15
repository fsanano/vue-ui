<template>
  <InputContainer
    :payload="containerPayload"
    :click-on-title="focusOnInput"
  >
    <div
      v-if="isIconExist"
      class="input__icon"
      @click="focusOnInput"
    >
      <!-- @slot Для отображения иконки или символа -->
      <slot name="icon"/>
    </div>
    <!-- Поле ввода -->
    <input
      v-mask="mask"
      v-if="mask"
      ref="input"
      :value="value"
      :placeholder="placeholder"
      :disabled="isDisabled"
      type="text"
      class="input__field"
      @input="emitInput"
      @focus="emitFocus"
      @blur="emitBlur"
    >
    <input
      v-else
      ref="input"
      :value="value"
      :placeholder="placeholder"
      :disabled="isDisabled"
      type="text"
      class="input__field"
      @input="emitInput"
      @focus="emitFocus"
      @blur="emitBlur"
    >
  </InputContainer>
</template>

<script>
/**
 * Компонент текстового поля.
 */
import InputContainer from '@/components/InputContainer.vue';
import input from '../mixins/input';

export default {
  name: 'InputText',
  components: {
    InputContainer,
  },
  mixins: [
    input,
  ],
  props: {
    /**
     * Переменная передаваемая от родительского компонента
     * @model
     */
    value: {
      type: [String, Number],
      required: false,
      default: '',
    },
    mask: {
      type: String,
      required: false,
      default: '',
    },
  },
  computed: {
    /**
     * Проверка существования иконки
     * @return {Boolean}
     */
    isIconExist() {
      return this.$slots.icon;
    },
  },
  methods: {
    /**
     * Передача родительскому компоненту событие input (изменения поля)
     * @event input
     * @type {String}
     * @param  {Object} event [Объект события]
     */
    emitInput(event) {
      this.$emit('input', event.target.value, event);
    },
    /**
     * Передача родительскому компоненту событие blur (потеря фокуса)
     * @event validate
     * @type {String}
     * @param  {Object} event [Объект события]
     */
    emitBlur(event) {
      this.$emit('validate', event.target.value);
    },
    /**
     * @event focus
     * @type {Function}
     * Передача родительскому компоненту событие focus (фокусировки на поле)
     */
    emitFocus() {
      this.$emit('focus');
    },
  },
};
</script>

<style lang="sass" scoped>
  @import '@/assets/sass/input.sass'
</style>

<docs>
```
new Vue({
  data() {
    return {
      rubValue: '',
      input1: '',
      input2: ''
    };
  },
  template: `
    <div>
     <div class="row mb-20">
        <div class="col-6">
          <InputText
            v-model="input1"
            title="Поле с заголовком"
            placeholder="Текст на фоне"
          />
        </div>
        <div class="col-6">
          <InputText
            v-model="rubValue"
            title="Пример с символом рубля (или иконки)"
            placeholder="With icon"
            @focus="clearValue"
          >
            <template slot="icon"> ₽ </template>
          </InputText>
        </div>
      </div>
      <div class="row mb-40">
        <div class="col-6">
          <InputText
            v-model="input2"
            :is-disabled="true"
            placeholder="Не активное поле"
          />
        </div>
        <div class="col-6">
          <InputText
            v-model="input2"
            :is-error="!input2"
            placeholder="Поле с ошибкой"
            error-text="Поле не должно быть пустым"
          />
        </div>
      </div>
    </div>
  `
})
```
</docs>