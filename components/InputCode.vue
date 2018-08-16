<template>
  <InputContainer
    :payload="containerPayload"
    :click-on-title="focusOnField"
    class="input__container--auto"
  >
    <div
      class="input__code-wrap"
      @click="focusOnField"
    >
      <div
        v-for="num in codeNumbers"
        :class="{'active': num.value !== ''}"
        :key="num.id"
        class="input__cover"
      >
        <input
          v-mask="'#'"
          :ref="`num${num.id}`"
          v-model="num.value"
          type="tel"
          maxlength="1"
          class="input__field input__field--small"
          @keydown="handleKeyDown($event, num.id)"
          @keyup="handleKeyUp($event, num.id)"
        >
      </div>
    </div>
  </InputContainer>
</template>

<script>
import input from '../mixins/input';
import InputContainer from '@/components/InputContainer.vue';
/**
 * Компонент поля ввода кода из смс.
 */
export default {
  name: 'InputCode',
  components: {
    InputContainer,
  },
  mixins: [
    input,
  ],
  props: {
    /**
     * Длина вводимого кода
     */
    codeLength: {
      type: Number,
      required: false,
      default: 4,
    },
  },
  data() {
    return {
      /**
       * Массив данных каждого поля
       * @type {Array}
       */
      codeNumbers: [],
      /**
       * Введенный код, отправляемый в родительский компонент
       * @type {String}
       */
      code: '',
    };
  },
  mounted() {
    this.buildFields();
  },
  methods: {
    /**
     * Создание полей ввода для всего кода, зависит от длины кода
     */
    buildFields() {
      const { codeLength } = this;
      for (let i = 0; i < codeLength; i++) {
        this.codeNumbers.push({
          value: '',
          id: i + 1,
        });
      }
    },
    /**
     * Метод для фокусировке на соседние поля
     * @param  {Object} event [Объект события]
     * @param  {String} side  [Сторона от элемента, принимает два значения: ['next', 'previous']]
     * @return {Function}     [Фокусировка на элементе]
     */
    focusOnSibling(event, side) {
      event.target.parentElement[`${side}ElementSibling`].children[0].focus();
    },
    /**
     * Обработка события ввода всего кода
     * @event done
     * @type {Number}
     * @return {Function} [Передача родительскому компоненту]
     */
    handleCodeInputDone() {
      const codeLength = this.code.length;
      if (codeLength === this.codeLength) {
        this.$emit('done', this.code);
      }
    },
    /**
     * Обработка события нажатие на клавишу 
     * @event input
     * @type {Number}
     * @param  {Object} event [Объект события]
     * @param  {Number} id    [Id поля]
     * @return {Function}     [Передача значения родительскому элеметну]
     */
    handleKeyUp(event, id) {
      this.code = this.codeNumbers.map(el => el.value).join('');

      if (event.key === 'Backspace') {
        this.codeNumbers[id - 1].value = '';
        if (id > 1) {
          this.focusOnSibling(event, 'previous');
        }
      }
      this.$emit('input', this.code);
      this.handleCodeInputDone();
    },
    /**
     * Обработка события отпускания клавиши
     * @param  {Object} event [Объект события]
     * @param  {Number} id    [Id поля]
     * @return {Function}     [Фокусировка на след елементе]
     */
    handleKeyDown(event, id) {
      const { value } = event.target;
      if (event.key !== 'Backspace') {
        if (id < this.codeLength && value) {
          this.focusOnSibling(event, 'next');
        }
      }
    },
    /**
     * Фокусировка на активном поле
     */
    focusOnField() {
      const id = this.code.length + 1;
      if (id < this.codeLength) {
        const el = this.$refs[`num${id}`][0];
        el.focus();
      }
    },
  },
};
</script>

<style lang="sass" scoped>
  // @import '@/assets/sass/input.sass'
  @import '@/assets/sass/vars.sass'

  .input__code-wrap
    display: flex
    width: 100%
    justify-content: center

  .input__cover
    position: relative
    z-index: 1
    .input__field--small
      pointer-events: none
    &:first-of-type,
    &.active
      .input__field--small
        pointer-events: auto
    &.active
      &:after
        display: none
    &.active+.input__cover
      .input__field--small
        pointer-events: auto
    &:after
      content: ''
      position: absolute
      z-index: -1
      top: 0
      right: 0
      bottom: 0
      left: 0
      margin: auto
      display: block
      border-radius: 10px
      width: 10px
      height: 10px
      background-color: rgba($primary-color-invert, .15)

  .input__field--small
    width: 25px
    background-color: transparent
    // padding: 16px 4px 17px
    text-align: center
    border: 0
</style>

<docs>
```jsx
  new Vue({
    data() {
      return {
        smsCode: '',
      };
    },
    template: `
      <InputCode
        v-model="smsCode"
      />
    `
  })
```
</docs>