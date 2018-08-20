<template>
  <div class="payment__confirm">
    <h1>tsne</h1>
  </div>
</template>

<script>
import ButtonPrimary from '@/components/ButtonPrimary.vue';
import InputText from '@/components/InputText.vue';
import InputPhone from '@/components/InputPhone.vue';

export default {
  name: 'FormPaymentConfirm',
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
<FormPaymentConfirm/>
```
</docs>
