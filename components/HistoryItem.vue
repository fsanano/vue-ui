<template>
  <div class="history__item">
    <div class="history__game d-flex align-items-center justify-content-between">
      <IconBase
        size="custom"
        name="sad"
        class="game__icon"
      />
      <div class="game__data d-flex align-items-center">
        <div class="data__title">Банк</div>
        <div class="data__value">20₽</div>
      </div>
      <div class="game__data d-flex align-items-center">
        <div class="data__title">Шанс</div>
        <div class="data__value">12%</div>
      </div>
      <ButtonLight typeof="history">Подробнее</ButtonLight>
    </div>
    <div
      v-if="showDropdown"
      class="history__dropdown"
    >
      setnsetn
    </div>
  </div>
</template>

<script>
import IconBase from '@/components/IconBase.vue';
import ButtonLight from '@/components/ButtonLight.vue';
/**
 * Комопнент элемента списка истории игр
 */
export default {
  name: 'HistoryItem',
  components: {
    IconBase,
    ButtonLight,
  },
  props: {
    /**
     * Все данные игры
     */
    payload: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      /**
       * Флаг видимости выпадающей дополнительной информации
       * @type {Boolean}
       */
      showDropdown: false,
    };
  },
  computed: {},
  watch: {},
  beforeCreate() {},
  created() {},
  fetch() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {},
  errorCaptured() {},
};
</script>

<style lang="sass">
  @import '@/assets/sass/vars.sass'
  .history__game
    padding: 0 30px
    height: 75px
    border-bottom: 1px solid rgba($primary-color, .15)

  .game__icon
    width: 35px
    height: 35px

  .data__title
    font-size: 18px
    opacity: .4
    margin-right: 10px

  .data__value
    font-size: 24px
    font-weight: 700

</style>

<docs>
```
<HistoryItem/>
```
</docs>
