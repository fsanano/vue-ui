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
  name: 'ButtonPlane',
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
      return ['button__plane', `button__plane--${this.size}`];
    },
  },
};
</script>

<style lang="sass" scoped>
  @import '@/assets/sass/vars.sass'

  .button__plane
    padding: 1px 7px
    text-align: center
    font-size: 20px
    font-weight: 700
    color: $primary-color
    background-color: transparent
    .button__content
    &:hover,
    &:active,
    &.active
      color: $accent

  .button__plane
    &.button__plane--small
      font-size: 14px
      font-weight: normal
      line-height: 1.5
      margin: 0 10px

    &.button__plane--normal
      font-size: 15px

    &.button__plane--large
      font-size: 20px
      .button__content
        justify-content: flex-start
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
