<template>
  <ButtonBase :payload="buttonPayload">
    <!--
      @slot Содержимое кнопки. Текст (и иконка).
    -->
    <slot/>
  </ButtonBase>
</template>

<script>
import ButtonBase from '@/components/ButtonBase.vue';
import button from '../mixins/button.js';
/**
 * Базовый компонент light кнопки.   
 * При размере `large` меняется выравнивание текста и размеры иконки.
 */
export default {
  name: 'ButtonLight',
  components: {
    ButtonBase,
  },
  mixins: [
    button,
  ],
  props: {
    /**
     * Размер кнопки, принимает один из трех вариантов: 'small', 'normal', 'large'
     */
    size: {
      type: String,
      required: false,
      default: 'normal',
      validator(value) {
        return ['small', 'normal', 'large'].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    /**
     * Массив классов модификаторов
     * @return {Array} [Массив классов]
     */
    modificator() {
      return ['button__light', `button__light--${this.size}`];
    },
  },
};
</script>

<style lang="sass" scoped>
  @import '@/assets/sass/vars.sass'

  .button__light
    padding: 3px 15px
    box-shadow: inset 0 0 0 1px rgba($primary-color, .32)
    text-align: center
    font-size: 15px
    color: $primary-color
    background-color: transparent
    .button__content
    &:hover
      box-shadow: inset 0 0 0 1px $secondary

    &:active,
    &.active
      box-shadow: inset 0 0 0 2px $secondary

  .button__light
    &.button__light--small
      height: 30px
      font-size: 13px

    &.button__light--normal
      height: 40px
      font-size: 15px

    &.button__light--large
      width: 100%
      height: 60px
      font-size: 20px
      .button__content
        justify-content: flex-start
      .button__light-icon
        width: 30px
        height: 30px
</style>

<docs>
```
<div class="row">
  <div class="col-3">
    <ButtonLight size="small">Small</ButtonLight>
    <ButtonLight class="ml-10">Normal</ButtonLight>
  </div>
  <div class="col-6">
    <ButtonLight size="large">Large</ButtonLight>
  </div>
  <div class="col-3">
    <ButtonLight :is-loaded="true">Large</ButtonLight>
  </div>
</div>
```
</docs>
