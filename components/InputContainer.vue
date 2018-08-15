<template>
  <div class="input__container">
    <!-- Заголовок контейнера -->
    <div
      v-if="payload.title"
      class="input__title"
      @click="clickOnTitle"
      v-html="payload.title"
    />
    <div
      :class="payload.modificators"
      class="input__wrap"
    >
      <!-- @slot Содержимое контейнеры -->
      <slot/>
    </div>

    <!-- Сообщение об ошибке -->
    <div
      v-if="payload.isError"
      class="error__msg input__error"
      v-html="payload.errorText"
    />
  </div>
</template>

<script>
/**
 * Компонент контейнер для форм ввода.
 */
export default {
  name: 'InputContainer',
  props: {
    /**
     * Объект нагрузки контейнера, передает заголовок, текст ошибки и флаг ошибки
     * 
     */
    payload: {
      type: Object,
      required: false,
      default() {
        return {};
      },
    },
    /**
     * Обработка события клика на заголовок
     */
    clickOnTitle: {
      type: Function,
      required: false,
      default: () => {},
    },
  },

};
</script>

<style lang="sass" scoped>
  @import '@/assets/sass/input.sass'

  .input__container
    position: relative
    width: 100%
    padding: 10px 14px
    background-color: $primary-color

  .input__container--auto
    width: auto
    display: inline-block
    // .input__wrap
    //   // padding: 0 5px
    //   display: flex
    //   justify-content: center
    //   .input__field
    //     text-align: center

  .input__wrap
    display: flex
    border: 2px solid $primary-color
    background-color: $primary-color
    border-radius: 5px
    overflow: hidden

  .input__wrap--error
    border-color: $error!important

  .input__error
    position: absolute
    z-index: 1
    top: 100%
    left: 0

  .input__wrap--disabled
    background-color: $disabled-bg
    border: 2px solid $disabled-bg
    pointer-events: none
    .input__field
      background-color: $disabled-bg
      pointer-events: none

  .input__title
    font-size: 14px
    letter-spacing: 1.1px
    text-transform: uppercase
    color: #9a8b86
    font-weight: 700
    &:hover
      cursor: pointer
</style>

<docs>
```
<InputContainer>InputContent</InputContainer>
```
</docs>