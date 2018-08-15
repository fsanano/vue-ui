<template>
  <div class="about__list">
    <AboutItem
      v-for="item in list"
      :key="item.icon"
      :payload="item"
    />
  </div>
</template>

<script>
import AboutItem from '@/components/AboutItem.vue';
/**
 * Компонент о компании
 */
export default {
  name: 'AboutList',
  components: {
    AboutItem,
  },
  data() {
    return {
      list: [
        {
          content: 'X-WIN проводит розыгрыши денег между игроками. Победитель забирает всё.',
          icon: 'about1',
        },
        {
          content: 'Люди делают ставки за 30 секунд. Больше ставка — выше шанс победы. Но, выиграть может любой.',
          icon: 'about2',
        },
        {
          content: 'Победителя выбирает <a href="https://random.org" target="_blank" class="text--link text--accent">Random.org</a>. Честность любой игры можно проверить.',
          icon: 'about3',
        },
      ],
    };
  },
};
</script>

<style lang="sass">
  @import '@/assets/sass/common.sass'
  .about__list
    display: flex
    padding: 33px 0 20px
</style>

<docs>
```
<AboutList/>
```
</docs>
