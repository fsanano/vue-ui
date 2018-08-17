<template>
  <div class="payments__list">
    <div
      v-for="item in list"
      :key="item.icon"
      :class="{'active': isActive(item)}"
      class="payment__item d-flex align-items-center"
      @click="setPaymentSystem(item)"
    >
      <IconBase
        :name="item.icon"
        class="payment__icon"
        size="middle"
      />
      <span v-html="item.name"/>
      <IconBase
        v-if="item === active"
        name="arrow-right"
        class="payment__arrow"
        size="custom"
      />
    </div>
  </div>
</template>

<script>
import IconBase from '@/components/IconBase.vue';

export default {
  name: 'PaymentSystems',
  components: {
    IconBase,
  },
  mixins: [],
  props: {
    /**
     * Активная система оплаты
     * @type {Object}
     */
    active: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
    /**
     * Список платежных систем
     */
    list: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
  },
  methods: {
    /**
     * Метод выбора активной системы оплаты
     * @param {Object} system [Объект системы оплаты]
     */
    setPaymentSystem(system) {
      this.$emit('set', system);
    },

    isActive(item) {
      return item === this.active;
    },
  },
};
</script>

<style lang="sass">
  @import '@/assets/sass/vars.sass'
  .payments__list
    padding: 15px 0
    width: 300px
    border-right: 1px solid rgba($primary-color, .15)

  .payment__item
    position: relative
    padding: 15px 30px
    border-top: 1px solid transparent
    border-bottom: 1px solid transparent
    font-size: 18px
    &.active
      background-color: rgba($primary-color-invert, .4)
      font-weight: bold
      border-color: rgba($primary-color, .15)

  .payment__icon
    margin-right: 8px

  .payment__arrow
    position: absolute
    top: 0
    bottom: 0
    margin: auto
    right: 20px
    width: 10px
    height: 20px

</style>

<docs>
```
<PaymentSystems/>
```
</docs>
