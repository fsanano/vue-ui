<template>
  <transition name="fancy">
    <div
      v-if="isVisible"
      class="aside__fancy"
    >
      <AsideAuth :status="auth"/>
      <AsideProfile :status="profile"/>
      <AsidePayment :status="refill"/>
      <AsideWithdraw :status="withdrawal"/>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex';
import AsideAuth from '@/components/AsideAuth.vue';
import AsideProfile from '@/components/AsideProfile.vue';
import AsidePayment from '@/components/AsidePayment.vue';
import AsideWithdraw from '@/components/AsideWithdraw.vue';
/**
 * Компонент конейнер для всех сайдбаров
 */
export default {
  name: 'TheAside',
  components: {
    AsideAuth,
    AsideProfile,
    AsidePayment,
    AsideWithdraw,
  },
  computed: {
    ...mapState({
      aside: state => state.aside,
      signin: state => state.aside.signin,
      auth: state => state.aside.auth,
      profile: state => state.aside.profile,
      refill: state => state.aside.refill,
      withdrawal: state => state.aside.withdrawal,
    }),
    /**
     * Флаг состояния видимости хотя бы одного сайдбара
     */
    isVisible() {
      return Object.values(this.aside).indexOf(true) !== -1;
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
    z-index: 3
    display: flex
    justify-content: flex-end
    width: 100%
    height: 100%
    background-color: rgba($primary-color-invert, .9)

  .fancy-enter-active, .fancy-leave-active
    transition: opacity .3s

  .fancy-enter, .fancy-leave-to
    opacity: 0
</style>

<docs>
```
<TheAside/>
```
</docs>
