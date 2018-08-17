<template>
  <div class="history__item">
    <div
      :class="{'win': payload.win}"
      class="history__game d-flex align-items-center justify-content-between"
    >
      <IconBase
        :name="icon"
        size="custom"
        class="game__icon"
      />
      <div class="game__data d-flex align-items-center">
        <div class="data__title">Банк</div>
        <div
          class="data__value"
          v-html="bank"
        />
      </div>
      <div class="game__data d-flex align-items-center">
        <div class="data__title">Шанс</div>
        <div
          class="data__value"
          v-html="chanse"
        />
      </div>
      <ButtonLight
        :class="{'active': showDropdown}"
        type="fill"
        @click.native="toggleDropdown"
      >
        <span class="btn__content">
          <template v-if="showDropdown">Скрыть</template>
          <template v-else>Подробнее</template>
        </span>
      </ButtonLight>
    </div>
    <div
      :class="{'active': showDropdown}"
      class="history__dropdown"
    >
      <div class="d-flex justify-content-between align-items-center">
        <div class="dropdown__info">
          <div class="info__title">Ставка</div>
          <div
            class="info__value"
            v-html="rate"
          />
        </div>
        <ButtonLight type="fill">проверить на random.org</ButtonLight>
        <div class="dropdown__info">
          <div class="info__title">Билеты</div>
          <div class="d-flex">
            <div
              v-for="item in payload.tickets"
              :key="item"
              class="ticket__item"
              v-html="item"
            />
          </div>
        </div>
      </div>
      <div class="members__title mb-15">Участники</div>
      <div class="d-flex">
        <div
          v-for="item in payload.members"
          :key="item.id"
          class="members__item mr-15"
        >
          <img
            src="/avatars/ufo.png"
            alt="member"
          >
        </div>
      </div>
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
  computed: {
    /**
     * В зависимости от результата игры выводиться иконка
     * @return {String} [Название иконки]
     */
    icon() {
      if (this.payload.win) {
        return 'cup';
      } else {
        return 'sad';
      }
    },
    /**
     * Банк игры со значением рубля
     * @return {String} [банк с символом валюты]
     */
    bank() {
      return `${this.payload.bank} ₽`;
    },
    /**
     * Шанс выигрыша в процентах
     * @return {String} [шанс выигрыша]
     */
    chanse() {
      return `${this.payload.chanse}%`;
    },
    /**
     * Ставка пользователя
     * @return {String} [Ставка со знаком валюты]
     */
    rate() {
      return `${this.payload.rate} ₽`;
    },
  },
  methods: {
    /**
     * Метод переключения состоя
     * @return {[type]} [description]
     */
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
  },
};
</script>

<style lang="sass">
  @import '@/assets/sass/vars.sass'
  .history__item
    position: relative

  .history__game
    padding: 0 30px
    height: 75px
    border-bottom: 1px solid rgba($primary-color, .15)
    &.win
      box-shadow: inset 4px 0 0 $accent

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

  .btn__content
    width: 70px

  .history__dropdown
    max-height: 0
    transition: max-height 0.15s ease-out, padding 0.1s ease-out
    overflow: hidden
    padding: 0 25px
    background-color: rgba($primary-color-invert, .2)
    &.active
      max-height: 500px
      padding: 18px 25px 30px
      transition: max-height 0.2s ease-in, padding 0.1s ease-in

  .info__title
    margin-bottom: 5px
    font-size: 14px
    opacity: .4

  .info__value
    font-size: 24px
    font-weight: 700

  .ticket__list
    max-width: 300px

  .ticket__item
    font-size: 15px
    line-height: 1.7
    padding: 0 8px
    color: $primary-color-invert
    background-color: $accent
    margin-right: 5px
    margin-bottom: 5px

  .members__title
    font-size: 20px
    font-weight: 700

  .members__item
    width: 50px
    height: 50px
    img
      max-width: 100%
      max-height: 100%

</style>

<docs>
```
<HistoryItem/>
```
</docs>
