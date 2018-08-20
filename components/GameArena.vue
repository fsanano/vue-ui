<template>
  <div class="game__container">
    <ArenaInfo
      :payload="info"
    />
    <ArenaCanvas :payload="info"/>
    <ArenaHistory/>
  </div>
</template>

<script>
/**
 * "Глупые" компоненты для отображения состояния игры 
 */
import ArenaInfo from '@/components/ArenaInfo.vue';
import ArenaCanvas from '@/components/ArenaCanvas.vue';
import ArenaHistory from '@/components/ArenaHistory.vue';
/**
 * Компонент игры "Арена"
 */
export default {
  name: 'GameArena',
  components: {
    ArenaInfo,
    ArenaCanvas,
    ArenaHistory,
  },
  mixins: [],
  props: {},
  data() {
    return {};
  },
  computed: {
    info() {
      return '';
      // данные игры
    },
  },
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
</style>

<docs>
```
<GameArena/>
```
</docs>
