<template>
  <svg
    :class="iconSize"
    width="100%"
    height="100%"
  >
    <use v-bind="{'xlink:href':`#${name}`}"/>
  </svg>
</template>

<script>
/**
 * Компонент для отображение иконки из svg спрайта (@see `/plugins/svgSpriteLoader.js`)
 */
export default {
  name: 'IconBase',
  props: {
    /**
     * Имя иконки из спрайта.   
     * Иконки загружаются в `/assets/img`.   
     * Имя иконки должно быть уникальным.    
     */
    name: {
      type: String,
      required: true,
      default: '',
    },
    /**
     * Размер иконки
     */
    size: {
      type: String,
      required: false,
      default: 'small',
      validator(value) {
        return ['small', 'middle', 'large', 'custom'].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    iconSize() {
      if (this.size !== 'custom') {
        return `icon__${this.size}`;
      }
    },
  },
};
</script>

<style lang="sass">
  .icon__small
    width: 20px
    height: 20px

  .icon__middle
    width: 30px
    height: 30px

</style>

<docs>
```
<IconBase name="loader"/>
```
</docs>