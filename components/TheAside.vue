<template>
  <transition name="asidecontainer">
    <div
      v-if="isVisible"
      class="aside__fancy"
    >
      <AsideSignin :status="signin"/>
      <AsideSignup :status="signup"/>
      <AsideProfile :status="profile"/>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex';
import AsideSignin from '@/components/AsideSignin';
import AsideSignup from '@/components/AsideSignup';
import AsideProfile from '@/components/AsideProfile';
/**
 * Компонент конейнер для всех сайдбаров
 */
export default {
  name: 'TheAside',
  components: {
    AsideSignin,
    AsideSignup,
    AsideProfile,
  },
  computed: {
    ...mapState({
      signin: state => state.common.aside.signin,
      signup: state => state.common.aside.signup,
      profile: state => state.common.aside.profile,
    }),
    /**
     * Флаг состояния видимости хотя бы одного сайдбара
     */
    isVisible() {
      return this.signin || this.signup || this.profile;
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

  .asidecontainer-enter-active, .asidecontainer-leave-active
    transition: opacity .3s

  .asidecontainer-enter, .asidecontainer-leave-to
    opacity: 0
</style>

<docs>
```
<TheAside/>
```
</docs>
