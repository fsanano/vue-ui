<template>
  <ButtonBase :payload="buttonPayload">
    <!-- Иконка социальной сети -->
    <IconBase
      :name="name"
      class="button__light-social-icon"
    />
    <!-- Текст десктопной версии -->
    <span class="button__light-text">
      <!-- @slot Текст отображаемый на десктопе -->
      <slot/>
    </span>
    <!-- Текст мобильной версии -->
    <!-- Текста переключаются с помощью css на разрешении 768px -->
    <span
      class="button__light-text--mobile"
      v-html="name"
    />
  </ButtonBase>
</template>

<script>
/**
 * Компонент light кнопки для социальных сетей.
 */
import IconBase from '@/components/IconBase';
import ButtonBase from '@/components/ButtonBase';
import button from '../mixins/button.js';

export default {
  name: 'ButtonLightSocial',
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
      return ['button__light', 'button__light--social'];
    },
  },
};
</script>

<style lang="sass">
  @import '@/assets/sass/vars.sass'
  @import '@/assets/sass/mixins.sass'
  @import '@/assets/sass/buttonLight.sass'

  .button__light--social
    padding: 18px 15px 15px
    height: 100px
    width: 100%
    &>.button__content
      display: flex
      flex-flow: column nowrap
      align-items: center
      justify-content: center
    +below($md)
      height: 90px

  .button__light-social-icon
    width: 46px
    height: 46px

  .button__light-text
    font-size: 15px
    font-weight: bold
    +below($md)
      display: none

  .button__light-text--mobile
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
    <ButtonLightSocial name="vk">Вконтакте</ButtonLightSocial>
  </div>
</div>
```
</docs>
