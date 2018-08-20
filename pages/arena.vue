<template>
  <div class="container-fluid">
    <GameArena/>
  </div>
</template>

<script>
import GameArena from '@/components/GameArena.vue';

export default {
  components: {
    GameArena,
  },
  methods: {
    showAside(name) {
      this.$store.dispatch('aside/setAsideStatus', { name, status: true });
    },
  },
};
</script>

<style>

</style>

