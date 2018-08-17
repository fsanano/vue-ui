<template>
  <select
    class="select__country-list"
    @change="setCountry"
  >
    <option
      v-for="country in countryList"
      :key="country.code"
      :value="countryString(country)"
      v-html="countryFull(country)"
    />
  </select>

</template>

<script>
/**
 * Компонент выпадающего списка стран, для выбора кода страны на мобильных устройствах в нативных селектах.
 */
export default {
  name: 'InputPhoneCountrySelectbar',
  components: {},
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
  methods: {
    /**
     * Передача объекта выбранной страны в родительский объект
     * @event change
     * @type {Object}
     * @param {Object}
     */
    setCountry(event) {
      const country = JSON.parse(event.target.value);
      this.$emit('change', country);
    },
    /**
     * Метод возвращает название страны с телефоным кодом страны 
     * @param  {Object} Объект страны
     * @return {String} Строка с кодом страны и названием страны
     */
    countryFull(country) {
      return `(${country.dialCode}) ${country.nameRu}`;
    },
    /**
     * Конвертация объекта страны в строку, для последующей передачи в родительский компонент.
     * @param  {Object} country [Объект выбранной страны]
     * @return {String}         [Строка]
     */
    countryString(country) {
      return JSON.stringify(country);
    },
  },
};
</script>

<style lang="sass" scoped>
  .select__country-list
    position: absolute
    width: 100%
    height: 100%
    opacity: 0
    left: 0
    top: 0
</style>

<docs>
```
<!-- Скрыл потому что перекрывает текст в документации -->
<InputPhoneCountrySelectbar
  v-show="false"
  :country-list="countryList"
/>
```
</docs>