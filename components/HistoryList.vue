<template>
  <div class="history__container">
    <div class="history__btn-wrap history__title">История игр</div>
    <div class="history__games">
      <HistoryItem
        v-for="(item, i) in list"
        :key="i"
        :payload="item"
      />
    </div>
    <div class="history__btn-wrap">
      <ButtonLight
        type="more"
        size="large"
      >
        Показать еще
      </ButtonLight>
    </div>
  </div>
</template>

<script>
import HistoryItem from '@/components/HistoryItem.vue';
import ButtonLight from '@/components/ButtonLight.vue';
/**
 * Компонент списка истории всех игр
 */
export default {
  name: 'HistoryList',
  components: {
    HistoryItem,
    ButtonLight,
  },
  props: {
    /**
     * Список истории игр
     * @type {Object}
     */
    list: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="sass">
  @import '@/assets/sass/vars.sass'

  .history__title
    font-size: 35px
    font-weight: bold
    font-family: 'Montserrat Alternates', sans-serif

  .history__btn-wrap
    padding: 20px 30px
    padding-bottom: 0
</style>

<docs>
```
<HistoryList/>
```
</docs>
