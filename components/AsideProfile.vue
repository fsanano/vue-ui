<template>
  <AsideBase
    :status="status"
    title="Профиль"
    name="profile"
  >
    <div class="profile__data d-flex">
      <div class="profile__avatar">
        <img
          src="/avatars/ufo.png"
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

    <div class="profile__control">
      <ButtonLight
        type="fill"
        @click.native="logout"
      >
        Выход
      </ButtonLight>
    </div>
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
  props: {
    status: {
      type: Boolean,
      require: true,
      default: false,
    },
  },
  data() {
    return {
      /**
       * Данные текущего пользователя
       * @type {Object}
       */
      profile: {
        balance: 0,
        games: 12,
        wins: 10,
      },
      /**
       * История игр текущего пользователя
       * @type {Array}
       */
      history: [
        {
          bank: 20,
          win: false,
          chanse: 54,
          rate: 10,
          members:[
            {
              id: 1,
              avatar: 1,
            },
          ],
          tickets: [12, 13, 15],
          ticketWinner: 13,
        },
        {
          bank: 120,
          win: true,
          chanse: 12,
          rate: 10,
          members:[
            {
              id: 2,
              avatar: 1,
            },
          ],
          tickets: [12, 13, 15],
          ticketWinner: 13,
        },
        {
          bank: 200,
          win: false,
          chanse: 59,
          rate: 10,
          members:[
            {
              id: 3,
              avatar: 1,
            },
            {
              id: 4,
              avatar: 1,
            },
            {
              id: 5,
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
  methods: {
    /**
     * Выход из учетной записи
     */
    logout() {
      this.$store.dispatch('aside/setAsideStatus', { name: 'profile', status: false });
      this.$store.dispatch('auth/logout');
    },
  },
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

  .profile__control
    padding: 30px
    padding-bottom: 0

</style>

<docs>
```
<AsideProfile/>
```
</docs>
