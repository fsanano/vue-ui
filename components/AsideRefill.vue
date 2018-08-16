<template>
  <AsideBase
    :status="status"
    title="Пополнение счета"
    name="refill"
  >
    <h1>stnes</h1>
  </AsideBase>
</template>

<script>
import AsideBase from '@/components/AsideBase.vue';
import IconBase from '@/components/IconBase.vue';
import ButtonLight from '@/components/ButtonLight.vue';
import HistoryList from '@/components/HistoryList.vue';
/**
 * Компонент сайдбара данных юзера
 */
export default {
  name: 'AsideRefill',
  components: {
    AsideBase,
    IconBase,
    ButtonLight,
    HistoryList,
  },
  props: {
    status: {
      type: Boolean,
      require: true,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="sass" scoped>
  @import '@/assets/sass/vars.sass'
</style>

<docs>
```
<AsideRefill/>
```
</docs>
