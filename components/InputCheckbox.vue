<template>
  <label class="checkbox__container">
    <input
      :value="value"
      type="checkbox"
      class="checkbox__button"
      @change="change"
    >
    <span
      :class="{'active': isActive}"
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
      type: String,
      required: true,
      default: '',
    },
  },

  computed: {
    /**
     * Определяем активена ли кнопка
     * @return {Boolean} [description]
     */
    isActive() {
      return this.value;
    },
  },

  methods: {
    /**
     * Меняем значение модели
     * @event input
     * @type {String}
     */
    change() {
      this.$emit('input', this.cValue);
    },
  },
};
</script>

<style lang="sass" scoped>
  @import '@/assets/sass/vars.sass'

  .checkbox__container
    position: relative
    &:hover
      .checkbox__label
        &:after
          background-color: $secondary
        &:before
          border-color: $secondary

  .checkbox__button
    display: none

  .checkbox__label
    position: relative
    padding-left: 26px
    font-size: 20px
    cursor: pointer
    &:after,
    &:before
      content: ''
      position: absolute
      left: 0
      top: 0
      bottom: 0
      margin: auto
      border-radius: 100%
      box-sizing: border-box

    &:after
      display: none
      width: 8px
      height: 8px
      margin-left: 5px
      background-color: $primary-color

    &:before
      display: block
      width: 18px
      height: 18px
      border: 2px solid $primary-color

  .checkbox__label.active
    &:after
      display: block
      background-color: $secondary
    &:before
      border-color: $secondary
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
