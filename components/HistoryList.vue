<template>
  <div class="history__container">
    <div class="history__title">История игр</div>
    <div class="history__games">
      <HistoryItem
        v-for="(item, i) in list"
        :key="i"
        :payload="item"
      />
    </div>
  </div>
</template>

<script>
import HistoryItem from '@/components/HistoryItem.vue';
/**
 * Компонент списка истории всех игр
 */
export default {
  name: 'HistoryList',
  components: {
    HistoryItem,
  },
  props: {
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
    padding: 20px 30px
    padding-bottom: 0
    font-size: 35px
    font-weight: bold
    font-family: 'Montserrat Alternates', sans-serif
</style>

<docs>
```
<HistoryList/>
```
</docs>
