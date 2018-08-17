<template>
  <form class="payment__form">
    <InputPhone
      v-if="payload.payment.type === 'phone'"
      v-model="userPhone"
      :country-list="countryList"
      title="Номер телефона"
      class="mb-15"
    />
    <div class="d-flex mb-15">
      <InputText
        v-model="amount"
        title="Сумма"
        class="mr-15"
      >
        <span slot="icon">₽</span>
      </InputText>
      <div class="payment__info">
        <div>
          Минимум&nbsp;
          <span class="text--accent">
            <span v-html="payload.info.min"/>₽
          </span>
        </div>
        <div>
          Коммисия&nbsp;
          <span class="text--accent">
            <span v-html="payload.info.commission"/>%
          </span>
        </div>
      </div>
    </div>
    <ButtonPrimary class="w-100">
      {{ btnText }}
    </ButtonPrimary>
  </form>
</template>

<script>
import ButtonPrimary from '@/components/ButtonPrimary.vue';
import InputText from '@/components/InputText.vue';
import InputPhone from '@/components/InputPhone.vue';
import countryList from '@/assets/countryList.js';

export default {
  name: 'PaymentSystems',
  components: {
    ButtonPrimary,
    InputText,
    InputPhone,
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
    return {
      /**
       * Выбранная система оплаты
       * @type {Object}
       */
      amount: '99',
      userPhone: '',
      countryList,
    };
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

  .payment__form
    padding: 30px
    width: 380px

  .payment__info
    min-width: 145px
    heigth: 100%
    padding: 0 20px
    display: flex
    flex-flow: column wrap
    justify-content: center
    background-color: rgba($primary-color, .15)

</style>

<docs>
```
<PaymentSystems/>
```
</docs>
