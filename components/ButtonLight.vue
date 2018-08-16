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
      default: 'medium',
      validator(value) {
        return ['small', 'medium', 'large', 'high'].indexOf(value) !== -1;
      },
    },

    /**
     * Размер кнопки, принимает один из трех вариантов: 'small', 'normal', 'large'
     */
    type: {
      type: String,
      required: false,
      default: 'fill',
      validator(value) {
        return ['fill', 'border', 'more'].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    /**
     * Массив классов модификаторов
     * @return {Array} [Массив классов]
     */
    modificator() {
      return ['button__light', `button__light--${this.type}`, `button__light--${this.size}`];
    },
  },
};
</script>

<style lang="sass">
  @import '@/assets/sass/vars.sass'

  .button.button__light
    padding: 3px 15px
    transition: .3s
    background-color: transparent

    // Type border
    &.button__light--border
      height: 35px
      font-size: 16px
      box-shadow: inset 0 0 0 1px rgba($primary-color, .15)
      color: $accent
      &:hover
        box-shadow: inset 0 0 0 1px $accent
      &:active,
      &.active
        box-shadow: inset 0 0 0 1px $secondary
        color: $secondary
      &.button--disabled
        color: $disabled-color

      &.button__light--large
        width: 100%
        height: 55px
        text-align: center

    // Type fill
    &.button__light--fill
      font-size: 12px
      background-color: $primary-color
      color: $secondary-color
      box-shadow: inset 0 -2px 0 0 #00000018
      &:hover
        background-color: $accent
        color: $secondary-color
      &:active,
      &.active
        box-shadow: inset 0 2px 0 1px #00000059
        color: $primary-color
        background-color: $secondary
      &.button--disabled
        color: $disabled-color
        background-color: $disabled-bg

    // Type more
    &.button__light--more
      font-size: 15px
      background-color: #413947
      color: $primary-color
      box-shadow: inset 0 1px 0 0 rgba($primary-color, 0.1)
      &.button__light--large
        width: 100%
        height: 60px
        text-align: center
      &:hover
        background-color: $primary-color
        color: $secondary-color

    &.button__light--fill,
    &.button__light--more
      font-weight: 700
      text-transform: uppercase


    // Size medium
    &.button__light--medium
      height: 40px

    // Size high
    &.button__light--high
      height: 75px
      width: 100px
      font-size: 14px
      white-space: normal
      .button__content
        flex-flow: column nowrap

    &.button__light--full
      width: 100%
      height: 55px
      font-size: 15px

    &.button__light--large
      // height: 100%
      // font-size: 20px
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
