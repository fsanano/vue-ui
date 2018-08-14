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
    padding: 19px 32px 24px
    font-weight: bold
    background-image: linear-gradient(to bottom, $accent-gradient-start, $accent-gradient-end)
    box-shadow: inset 0 -3px 0 0 rgba(0, 0, 0, 0.2)
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
      +above($lg)
        background-image: linear-gradient(to bottom, $secondary-gradient-start, $secondary-gradient-end)
    &:active
      +above($lg)
        box-shadow: inset 0 3px 0 0 rgba(0, 0, 0, 0.2)
      +below($lg)
        background-color: $secondary
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
