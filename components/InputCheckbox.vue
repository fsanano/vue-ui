<template>
  <label class="checkbox__container">
    <input
      :value="value"
      type="checkbox"
      class="checkbox__button"
      @change="input"
    >
    <span
      :class="{'active': value}"
      class="checkbox__label"
    >
      <!-- @slot Текст лейбла -->
      <slot/>
    </span>
  </label>
</template>

<script>
/**
 * Компонент радио кнопки.   
 * Обязательно нужно передать название группы, а так же значение кнопки.
 */
export default {
  name: 'InputCheckbox',

  props: {
    /**
     * Переменная присваивания
     * @model
     */
    value:{
      type: Boolean,
      required: true,
      default: false,
    },
  },

  methods: {
    /**
     * Меняем значение модели
     * @event input
     * @type {String}
     */
    input(event) {
      this.$emit('input', event.target.checked);
    },
  },
};
</script>

<style lang="sass" scoped>
  @import '@/assets/sass/vars.sass'

  .checkbox__container
    position: relative

  .checkbox__button
    display: none

  .checkbox__label
    position: relative
    padding-left: 26px
    font-size: 14px
    cursor: pointer
    &:after,
    &:before
      content: ''
      position: absolute
      left: 0
      top: 0
      bottom: 0
      margin: auto
      box-sizing: border-box

    &:after
      display: none
      width: 8px
      height: 4px
      margin-left: 5px
      border-left: 2px solid black
      border-bottom: 2px solid black
      transform: rotate(-45deg)
      // background-color: $primary-color

    &:before
      display: block
      width: 18px
      height: 18px
      border: 1px solid #564f5b
      background-color: $primary-color-invert

  .checkbox__label.active
    &:after
      display: block
    &:before
      background-color: $accent
      border: 1px solid $primary-color-invert
</style>

<docs>
```
new Vue({
  data() {
    return {
      authMethod: 'phone',
    };
  },
  template: `
    <div>
      <InputCheckbox
        v-model="authMethod"
      >Телефон</InputCheckbox>

    </div>
  `
});
```
</docs>
