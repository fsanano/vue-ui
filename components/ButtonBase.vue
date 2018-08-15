<template>
  <button
    :class="payload.classList"
    class="button"
  >
    <!-- Иконка лоадера -->
    <IconBase
      v-if="payload.isLoaded"
      :name="loaderName"
      class="button__loader"
    />
    <span class="button__content">
      <!-- @slot Текст кноки -->
      <slot/>
    </span>

  </button>
</template>

<script>
import IconBase from '@/components/IconBase.vue';
/**
 * Компонент основной кнопки.
 */
export default {
  name: 'ButtonBase',
  components: {
    IconBase,
  },
  props: {
    /**
     * Объект нагрузки базовой кнопкии, передает классы модификаторы и состояние лоадера
     */
    payload: {
      type: Object,
      required: false,
      default() {
        return {
          classList: [],
          isLoaded: false,
        };
      },
    },
  },
  computed: {
    /**
     * Возвращается имя лоадера в зависимости от присутсвия класса `button__light`
     * @return {String} [Имя лоадера]
     */
    loaderName() {
      const isLight = this.payload.classList.indexOf('button__light') !== -1;
      if (isLight) {
        return 'loader-white';
      } else {
        return 'loader';
      }
    },
  },
};
</script>

<style lang="sass">
  @import '@/assets/sass/vars.sass'
  @import '@/assets/sass/mixins.sass'

  .button
    position: relative
    border: 0
    margin: 0

    font-size: 20px
    color: $primary-color
    line-height: 1

    cursor: pointer
    user-select: none
    white-space: nowrap
    text-align: center
    &:active
      outline: none

    &.button--disabled,
    &.button--loaded
      color: #847e88
      pointer-events: none
      &:focus
        outline: none

  .button--loaded.button__light
    background: transparent !important

  .button--loaded
    color: transparent
    .button__content
      opacity: 0

  .button__loader
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    margin: auto

  .button__content
    display: flex
    align-items: center
    text-align: center
    justify-content: center
    height: 100%
</style>

<docs>
```
<ButtonBase :payload="buttonPayload">Ok</ButtonBase>
```
</docs>
