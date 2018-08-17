<template>
  <div
    :class="direction"
    class="input__dropdown-container"
  >
    <ul class="country-list">
      <li
        v-for="country in countryList"
        :key="country.code"
        class="country-list-item"
        @click="setCountry(country)"
      >
        <div class="country__flag">
          <IconBase
            :name="country.code"
            class="input__flag-icon"
          />
        </div>
        <div
          class="country__code"
          v-html="`+${country.dialCode}`"
        />
        <div
          class="country__name"
          v-html="country.nameRu"
        />
      </li>
    </ul>
  </div>

</template>

<script>
import IconBase from '@/components/IconBase.vue';

/**
 * Компонент выпадающего списка кодов стран
 */
export default {
  name: 'InputPhoneCountryList',
  components: {
    IconBase,
  },
  props: {
    /**
     * Список стран
     */
    countryList: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      direction: 'bottom',
    };
  },
  mounted() {
    this.checkListPosition();
  },
  methods: {
    /**
     * Проверка направления выпадающего списка и передача значения родительскому компоненту
     * @event direction
     * @type {String}
     */
    checkListPosition() {
      const listHeight = 150;
      const wrap = document.querySelector('.modal__content-wrap');
      const wrapData = wrap.getBoundingClientRect();
      const container = document.querySelector('.input__container-with-dropdown');
      const containerData = container.getBoundingClientRect();
      const before = containerData.y - wrapData.y;
      const after = wrapData.height - before - containerData.height;
      if (before < after || after > listHeight) {
        this.direction = 'bottom';
      } else {
        this.direction = 'top';
      }
      this.$emit('direction', this.direction);
    },
    /**
     * Передача объекта выбранной страны в родительский объект
     * @event change
     * @type {Object}
     * @param {Object}
     */
    setCountry(country) {
      this.$emit('change', country);
    },
  },
};
</script>

<style lang="sass" scoped>
  @import '@/assets/sass/vars.sass'
  @import '@/assets/sass/mixins.sass'

  .input__container-with-dropdown
    z-index: 3

  .input__dropdown-container
    position: absolute
    z-index: 3
    width: 100%
    height: 150px
    left: 0
    overflow-y: scroll
    background-color: $primary-color
    &.bottom
      top: 100%
      box-shadow: 0 3px 4px 0 rgba($primary-color-invert, .5)
      border-bottom-left-radius: 5px
      border-bottom-right-radius: 5px
    &.top
      bottom: 60px
      border-top-left-radius: 5px
      border-top-right-radius: 5px
      box-shadow: 0 -3px 4px 0 rgba($primary-color-invert, .5)

  .country-list
    padding: 0
    padding-right: 10px
    margin: 0
    color: $primary-color-invert
    font-size: 20px

  .country-list-item
    display: flex
    align-items: center
    cursor: pointer
    &:hover
      background-color: rgba($secondary, .2)

  .country__flag
    min-width: 63px
    width: 63px
    display: flex
    padding: 15px
    border-right: 1px solid $disabled-bg

  .country__code
    width: 46px
    min-width: 46px
    margin: 0 26px 0 16px

  .country__name
    color: $disabled-color
</style>


<docs>
```
<!-- Скрыл потому что перекрывает текст в документации -->
<InputPhoneCountryList
  v-show="false"
  :country-list="countryList"
/>
```
</docs>