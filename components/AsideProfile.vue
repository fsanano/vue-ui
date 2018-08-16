<template>
  <AsideBase
    :status="status"
    title="Профиль"
    name="profile"
  >
    <div class="profile__data d-flex">
      <div class="profile__avatar">
        <img
          src="/ufo.png"
          alt="profile"
        >
      </div>

      <div class="profile__stat">
        <div class="d-flex">
          <div class="stat__wrap mb-15">
            <div class="stat__title">Выиграл денег</div>
            <div
              class="stat__value"
              v-html="balance"
            />
          </div>
        </div>
        <div class="d-flex">
          <div class="stat__wrap">
            <div class="stat__title">Игр</div>
            <div
              class="stat__value"
              v-html="profile.games"
            />
          </div>
          <div class="stat__wrap">
            <div class="stat__title">Процент побед</div>
            <div
              class="stat__value"
              v-html="wins"
            />
          </div>
        </div>
      </div>
    </div>

    <HistoryList :list="history"/>

    <!-- <div class="profile__control"></div> -->
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
  name: 'AsideProfile',
  components: {
    AsideBase,
    IconBase,
    ButtonLight,
    HistoryList,
  },
  mixins: [],
  props: {
    status: {
      type: Boolean,
      require: true,
      default: false,
    },
  },
  data() {
    return {
      profile: {
        balance: 0,
        games: 12,
        wins: 10,
      },
      history: [
        {
          bank: 20,
          win: false,
          chanse: 50,
          rate: 10,
          members:[
            {
              userId: 123,
              avatar: 1,
            },
          ],
          tickets: [12, 13, 15],
          ticketWinner: 13,
        },
        {
          bank: 120,
          win: true,
          chanse: 50,
          rate: 10,
          members:[
            {
              userId: 123,
              avatar: 1,
            },
          ],
          tickets: [12, 13, 15],
          ticketWinner: 13,
        },
        {
          bank: 200,
          win: false,
          chanse: 50,
          rate: 10,
          members:[
            {
              userId: 123,
              avatar: 1,
            },
          ],
          tickets: [12, 13, 15],
          ticketWinner: 13,
        },
      ],
    };
  },
  computed: {
    balance() {
      return `${this.profile.balance} ₽`;
    },
    wins() {
      return `${this.profile.wins} %`;
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

<style lang="sass" scoped>
  @import '@/assets/sass/vars.sass'

  .profile__data
    min-width: 690px
    padding: 30px
    border-bottom: 1px solid rgba($primary-color, .15)

  .profile__avatar
    width: 145px
    margin-right: 30px
    img
      width: 100%

  .stat__wrap
    margin-right: 45px

  .stat__title
    font-size: 19px

  .stat__value
    font-size: 42px
    font-weight: bold
    line-height: 1

</style>

<docs>
```
<AsideProfile/>
```
</docs>
