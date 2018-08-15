<template>
  <aside
    v-if="status"
    class="aside__container"
  >
    <div
      class="aside__title"
      v-html="title"
    />
    <IconBase
      name="close"
      class="aside__close"
      @click.native="close"
    />
    <!-- @slot Контент сайдбара -->
    <slot/>
  </aside>
</template>

<script>
import IconBase from '@/components/IconBase.vue';
/**
 * Базовый компонент для создания сайдбара
 */
export default {
  name: 'AsideBase',
  components: {
    IconBase,
  },
  props: {
    /**
     * Заголовок сайдбара
     */
    title: {
      type: String,
      require: true,
      default: '',
    },
    /**
     * Имя сайдбара
     */
    name: {
      type: String,
      require: true,
      default: '',
      validator(name) {
        return ['signin', 'signup', 'profile'].indexOf(name) !== -1;
      },
    },
    /**
     * Флаг состояния видимости сайдбара
     */
    status: {
      type: Boolean,
      require: true,
      default: false,
    },
  },
  methods: {
    /**
     * Метод закрытия сайдбара
     */
    close() {
      const { name } = this;
      this.$store.dispatch('common/setAsideStatus', { name, status: false });
    },
  },
};
</script>

<style lang="sass">
  @import '@/assets/sass/vars.sass'
  .aside__fancy
    position: fixed
    top: 0
    left: 0
    display: flex
    justify-content: flex-end
    width: 100%
    height: 100%
    background-color: rgba($primary-color-invert, .9)

  .aside__container
    min-width: 389px
    background-color: $secondary-bg
</style>

<docs>
```
<AsideBase/>
```
</docs>
