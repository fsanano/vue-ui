<template>
  <AsideBase
    :status="status"
    title="Вывод средств"
    name="withdrawal"
  >
    <div
      v-if="step === 'choose'"
      class="d-flex payment__container"
    >
      <PaymentSystems
        :active="activePaymentSystem"
        :list="list"
        @set="setPayment"
      />
      <FormPayment
        :payload="form"
        type="withdrawal"
        @set="setStep('confirm')"
      />
    </div>

    <FormPaymentConfirm
      v-if="step === 'confirm'"
      :payload="confirm"
    />
  </AsideBase>
</template>

<script>
import AsideBase from '@/components/AsideBase.vue';
import PaymentSystems from '@/components/PaymentSystems.vue';
import FormPayment from '@/components/FormPayment.vue';
import FormPaymentConfirm from '@/components/FormPaymentConfirm.vue';
/**
 * Компонент сайдбара данных юзера
 */
export default {
  name: 'AsideWithdrawal',
  components: {
    AsideBase,
    PaymentSystems,
    FormPayment,
    FormPaymentConfirm,
  },
  props: {
    status: {
      type: Boolean,
      require: true,
      default: false,
    },
  },
  data() {
    return {
      /**
       * Шаг оплаты
       * @type {String}
       */
      step: 'choose',
      /**
       * Выбранная система оплаты
       */
      activePaymentSystem: {
        icon: 'card',
        name: 'Банк. карта',
        type: 'card',
      },
      /**
       * Список систем оплаты
       */
      list: [
        {
          icon: 'card',
          name: 'Банк. карта',
          type: 'card',
        },
        {
          icon: 'beeline',
          name: 'Билайн',
          type: 'phone',
        },
        {
          icon: 'qiwi',
          name: 'Qiwi',
          type: 'phone',
        },
        {
          icon: 'mts',
          name: 'МТС',
          type: 'phone',
        },
        {
          icon: 'yandex',
          name: 'Яндекс.Деньги',
          type: 'card',
        },
        {
          icon: 'megafon',
          name: 'Мегафон',
          type: 'phone',
        },
        {
          icon: 'privat24',
          name: 'Privat24',
          type: 'card',
        },
        {
          icon: 'tele2',
          name: 'Теле2',
          type: 'phone',
        },
        {
          icon: 'payeer',
          name: 'Payeer',
          type: 'card',
        },
        {
          icon: 'perfect-money',
          name: 'Perfect Money',
          type: 'card',
        },
      ],
    };
  },
  computed: {
    /**
     * Вспомогательные данные для формы оплаты
     */
    form() {
      return {
        info: {
          min: 99,
          commission: 0,
        },
        payment: this.activePaymentSystem,
      };
    },
    confirm() {
      return {
        amount: 99,
        way: this.activePaymentSystem,
      };
    },
  },
  methods: {
    /**
     * Метод для выбора системы оплаты
     * @param {Object} system [Объект системы оплаты]
     */
    setPayment(system) {
      this.activePaymentSystem = system;
    },
    /**
     * Изменение шага оплаты
     * @param {String} step [Название шага]
     */
    setStep(step) {
      this.step = step;
    },
  },
};
</script>

<style lang="sass" scoped>
  @import '@/assets/sass/vars.sass'

</style>

<docs>
```
<AsideWithdrawal/>
```
</docs>
