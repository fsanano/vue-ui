<template>
  <div class="aside__wrap">
    <div class="payment__confirm">
      <div class="text text--bold mb-20">Проверьте данные перед оплатой</div>
      <div class="confirm__table text mb-30">
        <div class="tr">
          <div class="td">Способ</div>
          <div
            class="td"
            v-html="payload.way.name"/>
        </div>
        <div class="tr">
          <div class="td">Сумма с комиссией</div>
          <div
            class="td"
            v-html="payload.amount"/>
        </div>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-4">
        <ButtonLight
          type="border"
          size="large"
          class="mr-20"
        >
          <IconBase
            name="arrow-back"
            size="custom"
            class="arrow__back"
          />
          Назад
        </ButtonLight>
      </div>
      <div class="col-8">
        <ButtonPrimary>
          Оплатить
        </ButtonPrimary>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonPrimary from '@/components/ButtonPrimary.vue';
import ButtonLight from '@/components/ButtonLight.vue';
import IconBase from '@/components/IconBase.vue';

export default {
  name: 'FormPaymentConfirm',
  components: {
    ButtonPrimary,
    ButtonLight,
    IconBase,
  },
  mixins: [],
  props: {
    /**
     * Список платежных систем
     */
    payload: {
      type: Object,
      required: true,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    btnText() {
      if (this.amount) {
        return `Пополнить на ${this.amount} ₽`;
      } else {
        return 'Введите сумму';
      }
    },
  },
  methods: {},
};
</script>

<style lang="sass">
  @import '@/assets/sass/vars.sass'
  .confirm__table
    width: 460px
    border: 1px solid rgba($primary-color, .15)
    background-color: rgba($primary-color-invert, .3)
  .tr
    display: flex
  .td
    width: 50%
    padding: 15px 30px
    &:first-of-type
      background-color: rgba($primary-color-invert, .6)
      color: rgba($primary-color, .35)

  .arrow__back
    width: 12px
    height: 12px
    margin-right: 5px

</style>

<docs>
```
<FormPaymentConfirm/>
```
</docs>
