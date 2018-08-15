<template>
  <div class="about__item">
    <IconBase
      :name="payload.icon"
      size="custom"
      class="about__icon"
    />
    <div
      class="about__text"
      v-html="payload.content"
    />
  </div>
</template>

<script>
import IconBase from '@/components/IconBase.vue';
/**
 * Комопнент элемента списка 'О компании'
 */
export default {
  name: 'AboutItem',
  components: {
    IconBase,
  },
  props: {
    /**
     * Текст и иконка элемента списка
     */
    payload: {
      type: Object,
      required: false,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="sass">
  @import '@/assets/sass/vars.sass'
  .about__item
    display: flex
    flex: 1
    align-items: center

  .about__icon
    width: 65px
    flex: 1 0 auto
    height: 75px

  .about__text
    padding-left: 18px
    padding-right: 15px
    font-size: 14px
</style>

<docs>
```
<AboutItem/>
```
</docs>
