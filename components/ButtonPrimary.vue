<template>
  <ButtonBase :payload="buttonPayload">
    <!-- @slot Текст кнопки -->
    <slot/>
  </ButtonBase>
</template>

<script>
import ButtonBase from '@/components/ButtonBase.vue';
import button from '../mixins/button.js';
/**
 * Компонент основной кнопки.
 */
export default {
  name: 'ButtonPrimary',
  components: {
    ButtonBase,
  },
  mixins: [
    button,
  ],
  computed: {
    /**
     * Массив классов модификаторов
     * @return {Array} [Массив классов]
     */
    modificator() {
      return ['button--primary'];
    },
  },
};
</script>

<style lang="sass" scoped>
  @import '@/assets/sass/mixins.sass'
  @import '@/assets/sass/vars.sass'

  .button--primary
    padding: 17px 32px 18px
    font-weight: bold
    background-color: $accent
    // background-image: linear-gradient(to bottom, $accent-gradient-start, $accent-gradient-end)
    border: 1px solid $primary-color-invert
    color: $primary-color-invert
    +below(480px)
      width: 100%
      .button__content
        text-align: center
        justify-content: center
    &:focus
      +below($lg)
        outline: none
    &:hover
      box-shadow: inset 0 3px 0 1px rgba($primary-color, 0.35), inset 0 0 5px 0 rgba($primary-color, 0.65)
      background-image: linear-gradient(to bottom, $accent-gradient-start, $accent-gradient-end)
      color: $primary-color
    &:active
      box-shadow: inset 0 3px 0 1px rgba($primary-color-invert, .3);
      background-color: $secondary !important;
      background-image: none !important
      color: $primary-color
    &.button--disabled
      background-color: $disabled-bg
      color: $disabled-color
</style>

<docs>
```
new Vue({
  data() {
    return {
      isLoaded: false,
    };
  },
  methods: {
    loadingSimulation() {
      this.isLoaded = true;
      setTimeout(() => {
        this.isLoaded = false;
      }, 2000);
    }
  },
  template: `
    <div class="row">
      <div class="col-4">
        <ButtonPrimary
          :is-loaded="isLoaded"
          @click.native="loadingSimulation"
        >
          Активная кнопка
        </ButtonPrimary>
      </div>
      <div class="col-4">
        <ButtonPrimary
          :is-disabled="true"
        >
          Не активная
        </ButtonPrimary>
      </div>
    </div>
  `
})
```
</docs>
