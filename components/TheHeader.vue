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
        <ButtonLight type="border">Как играть</ButtonLight>
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
      <div
        v-if="auth"
        class="d-flex align-items-center"
      >
        <div class="header__balance">
          <div class="balance__amount">12 ₽</div>
          <div class="d-flex">
            <ButtonPlane
              size="small"
            >
              <IconBase
                name="icon-pay-up"
                size="custom"
                class="balance__icon"
              />
              Пополнить
            </ButtonPlane>
            <ButtonPlane
              size="small"
            >
              <IconBase
                name="icon-pay-down"
                size="custom"
                class="balance__icon"
              />
              Снять
            </ButtonPlane>
          </div>
        </div>
        <ButtonPlane @click.native="openAside('profile')">
          <div class="d-flex align-items-center">
            <div class="account__avatar">
              <img
                src="avatars/boo.png"
                alt="userAvatar"
              >
            </div>
            <div class="account__name">Игрок 22911</div>
          </div>
        </ButtonPlane>
      </div>
      <div
        v-else
        class="d-flex align-items-center"
      >
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
import { mapState } from 'vuex';

import ButtonLight from '@/components/ButtonLight.vue';
import ButtonPlane from '@/components/ButtonPlane.vue';
import ButtonPrimary from '@/components/ButtonPrimary.vue';
import IconBase from '@/components/IconBase.vue';
/**
 * Компонент шапки
 */
export default {
  name: 'TheHeader',
  components: {
    ButtonLight,
    ButtonPlane,
    ButtonPrimary,
    IconBase,
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
  computed: {
    ...mapState({
      auth: state => state.auth.auth,
    }),
  },
  methods: {
    /**
     * Метод открывающий сайдбары
     * @param  {String} name [Имя сайдбара]
     */
    openAside(name) {
      this.$preventScroll.enable();
      this.$store.dispatch('aside/setAsideStatus', { name, status: true });
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

  .header__balance
    padding: 15px 0
    height: 100%
    background-color: rgba($primary-color, .1)

  .balance__amount
    padding: 0 15px
    margin-bottom: 5px
    font-size: 35px
    font-weight: bold
    line-height: 1

  .balance__icon
    width: 14px
    height: 9px
    margin-right: 7px

  .account__avatar
    width: 56px
    height: 56px
    margin: 0 15px
    img
      max-width: 100%
      max-height: 100%

  .account__name
    font-size: 18px
</style>

<docs>
```
<TheHeader/>
```
</docs>
