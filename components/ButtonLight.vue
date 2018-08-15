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
    typeof: {
      type: String,
      required: false,
      default: '',
      validator(value) {
        return ['code', 'full', 'header'].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    /**
     * Массив классов модификаторов
     * @return {Array} [Массив классов]
     */
    modificator() {
      return ['button__light', `button__light--${this.typeof}`];
    },
  },
};
</script>

<style lang="sass">
  @import '@/assets/sass/vars.sass'

  .button.button__light
    padding: 3px 15px
    // border-radius: 5px
    box-shadow: inset 0 0 0 1px rgba($primary-color, .15)
    text-align: center
    font-size: 15px
    color: $accent
    background-color: transparent
    transition: .3s
    &:hover,
    &:active
      box-shadow: inset 0 0 0 1px $accent

  .button__light
    &.button__light--code
      height: 72px
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
      height: 100%
      font-size: 20px
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
