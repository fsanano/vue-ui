<template>
  <div
    v-if="asideStatus"
    class="aside__fancy"
  >
    <AsideSignin :status="signin"/>
    <AsideSignup :status="signup"/>
    <AsideProfile :status="profile"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import AsideSignin from '@/components/AsideSignin';
/**
 * Компонент конейнер для всех сайдбаров
 */
export default {
  name: 'TheAside',
  components: {
    AsideSignin,
  },
  computed: {
    ...mapState({
      signin: state => state.common.aside.signin,
      signup: state => state.common.aside.signup,
      profile: state => state.common.aside.profile,
    }),
    asideStatus() {
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
</style>

<docs>
```
<TheAside/>
```
</docs>
