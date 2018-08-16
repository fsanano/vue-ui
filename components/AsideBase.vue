<template>
  <transition
    name="aside"
    mode="out-in"
  >
    <aside
      v-click-outside="close"
      v-if="status"
      class="aside__container"
    >
      <div
        class="aside__title"
        v-html="title"
      />
      <IconBase
        size="custom"
        name="close"
        class="aside__close"
        @click.native="close"
      />
      <div class="aside__content">
        <!-- @slot Контент сайдбара -->
        <slot/>
      </div>
    </aside>
  </transition>
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
      this.$preventScroll.disable();
      this.$store.dispatch('aside/setAsideStatus', { name, status: false });
    },
  },
};
</script>

<style lang="sass">
  @import '@/assets/sass/vars.sass'
  .aside__container
    min-width: 389px
    height: 100%
    background-color: $secondary-bg
    display: flex
    flex-flow: column nowrap
    border-left: 1px solid rgba($primary-color, .1)

  .aside__title
    padding: 0 27px
    font-family: 'Montserrat Alternates', sans-serif
    font-size: 35px
    font-weight: 500
    line-height: 2.15
    border-bottom: 1px solid rgba($primary-color, .1)
    background-color: rgba($primary-color-invert, .15)

  .aside__close
    position: absolute
    right: 30px
    top: 25px
    width: 30px
    height: 30px
    fill: white
    cursor: pointer
    &:hover
      fill: $accent

  .aside__content
    height: 100%
    overflow-y: auto
    padding-bottom: 30px

  .auth__container
    padding: 30px
    .button--primary
      width: 100%

  // Анимация появления и скрытия сайдбара
  .aside-enter-active, .aside-leave-active
    transition: transform .2s

  .aside-enter, .aside-leave-to
    transform: translate(100%, 0)
    opacity: 0
</style>

<docs>
```
<AsideBase/>
```
</docs>
