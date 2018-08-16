<template>
  <div class="container-fluid">
    <AboutList/>
    <button @click="showAside('profile')">Profile</button>
    <button @click="showAside('refill')">Refill</button>
    <button @click="showAside('withdrawal')">Withdrawal</button>
  </div>
</template>

<script>
import AboutList from '@/components/AboutList.vue';

export default {
  components: {
    AboutList,
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

