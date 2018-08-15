<template>
  <header class="header__container">
    <div class="container-fluid d-flex justify-content-between h-100">
      <div class="d-flex align-items-center">
        <a
          href="/"
          class="header__logo"
        >
          <img
            src="~/assets/img/logo.png"
            alt="logo">
        </a>
        <ButtonLight typeof="header">Как играть</ButtonLight>
        <ul class="header__nav d-flex">
          <li
            v-for="item in menu"
            :key="item.id"
            class="header__nav-item"
          >
            <a
              :href="item.link"
              class="header__nav-link"
              v-html="item.text"
            />
          </li>
        </ul>
      </div>
      <div class="d-flex align-items-center">
        <div class="btn__signin">
          <ButtonPlane
            size="large"
            @click.native="openAside('signin')"
          >
            Вход
          </ButtonPlane>
        </div>
        <ButtonPrimary @click.native="openAside('signup')">Регистрaция</ButtonPrimary>
      </div>
    </div>
  </header>
</template>

<script>
import ButtonLight from '@/components/ButtonLight.vue';
import ButtonPlane from '@/components/ButtonPlane.vue';
import ButtonPrimary from '@/components/ButtonPrimary.vue';
/**
 * Компонент шапки
 */
export default {
  name: 'TheHeader',
  components: {
    ButtonLight,
    ButtonPlane,
    ButtonPrimary,
  },
  data() {
    return {
      /**
       * Список ссылок меню
       * @type {Array}
       */
      menu: [
        {
          link: '/',
          id: 0,
          text: 'Игра',
        },
        {
          link: '/',
          id: 1,
          text: 'Конкурс',
        },
        {
          link: '/',
          id: 2,
          text: 'Группа ВКонтакте',
        },
      ],
    };
  },
  methods: {
    /**
     * Метод открывающий сайдбары
     * @param  {String} name [Имя сайдбара]
     */
    openAside(name) {
      this.$preventScroll.enable();
      this.$store.dispatch('common/setAsideStatus', { name, status: true });
    },
  },
};
</script>

<style lang="sass">
  @import '@/assets/sass/vars.sass'
  .header__container
    height: 90px
    border: 1px solid rgba($primary-color, .15)

  .header__logo
    padding: 15px 0
    width: 89px
    margin-right: 50px
    img
      width: 100%

  .header__nav
    padding: 0 12px
    margin: 0
    list-style-type: none

  .header__nav-item
    margin: 0 12px

  .header__nav-link
    position: relative
    font-size: 16px
    line-height: 1.25
    text-decoration: none
    color: rgba($primary-color, .6)
    &:after
      content: ''
      position: absolute
      left: 0
      bottom: 0
      display: none
      width: 100%
      height: 1px
      background-color: rgba($accent, .3)
    &:hover
      color: $accent
      &:after
        display: block
    &.active
      &:after
        display: block
        height: 4px
        top: 48px
        background-color: $accent
  .btn__signin
    margin: 0 28px
</style>

<docs>
```
<TheHeader/>
```
</docs>
