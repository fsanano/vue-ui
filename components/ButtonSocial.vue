<template>
  <ButtonBase :payload="buttonPayload">
    <!-- Текст десктопной версии -->
    <span class="button__social-text">
      <!-- @slot Текст отображаемый на десктопе -->
      <slot/>
    </span>
    <!-- Текст мобильной версии -->
    <!-- Текста переключаются с помощью css на разрешении 768px -->
    <span
      class="button__social-text--mobile"
      v-html="name"
    />
    <!-- Иконка социальной сети -->
    <IconBase
      :name="name"
      size="middle"
      class="button__social-icon"
    />
  </ButtonBase>
</template>

<script>
/**
 * Компонент кнопки для социальных сетей.
 */
import IconBase from '@/components/IconBase.vue';
import ButtonBase from '@/components/ButtonBase.vue';
import button from '../mixins/button.js';

export default {
  name: 'ButtonSocial',
  components: {
    ButtonBase,
    IconBase,
  },
  mixins: [
    button,
  ],
  props: {
    /**
     * Имя иконки и название социальной сети в мобильной версии.   
     * Соответственно, иконку надо называть как текст в мобильной версии.   
     * Валидация по 'vk', 'fb', 'ok'
     */
    name: {
      type: String,
      required: true,
      default: '',
      validator(value) {
        return ['vk', 'fb', 'ok'].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    /**
     * Массив классов модификаторов
     * @return {Array} [Массив классов]
     */
    modificator() {
      return ['button__social', `button__social--${this.name}`];
    },
  },
};
</script>

<style lang="sass">
  @import '@/assets/sass/vars.sass'
  @import '@/assets/sass/mixins.sass'

  .button__social
    padding: 0 16px 0 18px
    width: 100%
    height: 55px
    &>.button__content
      display: flex
      align-items: center
      justify-content: space-between
    +below($md)
      height: 90px

    &.button__social--vk
      background-color: blue

  .button__social-text
    font-size: 15px
    font-weight: bold
    +below($md)
      display: none

  .button__social-text--mobile
    display: none
    font-size: 13px
    font-weight: bold
    text-transform: uppercase
    +below($md)
      display: inline-block
</style>

<docs>
```
<div class="row">
  <div class="col-3">
    <ButtonSocial name="vk">Вконтакте</ButtonSocial>
  </div>
</div>
```
</docs>
