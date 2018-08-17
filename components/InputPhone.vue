<template>
  <InputContainer
    v-click-outside="hideDropdownList"
    :payload="containerPayload"
    :click-on-title="focusOnInput"
    class="input__container-with-dropdown"
  >
    <div
      class="input__icon"
      @click="toggleDropdown"
    >
      <!-- Иконка флага страны -->
      <IconBase
        :name="countryActive.code"
        class="input__flag-icon"
      />
      <!-- Селектбар для отображения нативного списка на мобильных устройствах -->
      <InputPhoneCountrySelectbar
        v-if="isMobile"
        :country-list="countryList"
        @change="setCountryFromList"
      />
    </div>

    <input
      v-mask="countryActive.mask"
      ref="input"
      :value="phone"
      :placeholder="placeholder"
      :disabled="isDisabled"
      type="tel"
      class="input__field"
      @input="updateValue"
      @keyup="removePlus"
    >
    <!-- Выпадающий список кодов стран -->
    <InputPhoneCountryList
      v-if="showDropdown && !isMobile"
      :country-list="countryList"
      @change="setCountryFromList"
      @direction="setDropdownDirection"
    />

  </InputContainer>

</template>

<script>
import { mapState } from 'vuex';
import IconBase from '@/components/IconBase.vue';
import InputContainer from '@/components/InputContainer.vue';
import InputPhoneCountrySelectbar from '@/components/InputPhoneCountrySelectbar.vue';
import InputPhoneCountryList from '@/components/InputPhoneCountryList.vue';
import input from '../mixins/input';

/**
 * Компонент поля ввода телефона, с возможностью выбора кода страны из дропдауна
 */
export default {
  name: 'InputPhone',
  components: {
    IconBase,
    InputContainer,
    InputPhoneCountrySelectbar,
    InputPhoneCountryList,
  },
  mixins: [
    input,
  ],
  props: {
    /**
     * Список стран
     */
    countryList: {
      type: Object,
      required: false,
      default() {
        return {
          ru: {
            code: 'ru',
            name: 'Russia',
            nameRu: 'Россия',
            nameLocale: 'Россия',
            dialCode: 7,
            mask: '+# ### ###-##-##',
            example: '8 (#12) 345-67-8#',
          },
        };
      },
    },
  },
  data() {
    return {
      /**
       * Переменная хранящая номер телефона
       * @type {String}
       */
      phone: '7',
      /**
       * Состояние выпадающего списка
       * @type {Boolean}
       */
      showDropdown: false,
      /**
       * Объект активной страны
       * @type {Object}
       */
      countryActive: this.countryList.ru,
      /**
       * Направление выпадающего списка
       * @type {String}
       */
      dropdownDirection: 'bottom',
    };
  },
  computed: {
    ...mapState({
      /**
       * Системная переменная возвращающаю информацию о девайсе пользователя
       * @param  {Object} state [Состояние всего проекта]
       * @return {Boolean}      [Тип устройства пользовател]
       */
      isMobile: state => state.common.isMobile,
    }),
    /**
     * Модификатор общего контейнера
     * @type {Array}
     */
    inputContainerModificator() {
      return [
        { 'input__wrap-open': this.showDropdown && !this.isMobile },
        this.dropdownDirection,
      ];
    },
  },
  methods: {
    /**
     * Переключение состояния видимости выпадающего списка
     * @return {Boolean}
     */
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    /**
     * Скрытие выпадающего списка
     * @return {Boolean}
     */
    hideDropdownList() {
      this.showDropdown = false;
    },
    /**
     * Передача значение поля родительскому компоненту
     * @event input
     * @type {String}
     * @param  {String} phone [Объект события]
     * @return {String}       [Значение инпута]
     */
    emitValue(phone) {
      // console.info('emit phone', phone);
      this.phone = phone;
      this.$emit('input', phone);
    },
    /**
     * Метод слушающий событие изменение инпута
     * @param  {Object} event [Объект события]
     * @return {Function}     [Вызов методов]
     */
    updateValue(event) {
      const { value } = event.target;
      this.emitValue(value);
      this.setCountryByDialCode();
    },
    /**
     * Удаление знака + из поля, после удаления первой цифры номера телефона
     * @param  {Object} event [Объект события]
     * @return {Function}     [Вызов метода emitValue]
     */
    removePlus(event) {
      if (event.target.value === '+' && event.key === 'Backspace') {
        this.emitValue('');
      }
    },
    /**
     * Возвращает первые 4 символа номера телефона
     * @return {String}
     */
    getPhoneDialCode() {
      return this.phone.replace(/\s+/g, '').substring(0, 4);
    },

    /**
     * Установка активной страны по введенному коду страны
     * @param  {String} dialCode [Код страны]
     * @return {Object}          [Объект активной страны]
     */
    setCountryByDialCode() {
      const dialCode = this.getPhoneDialCode();
      const dialLength = dialCode.length;
      const list = this.countryList;
      const countryArray = Object.keys(list);

      if (dialLength > 2) {
        countryArray.forEach((country) => {
          const countryData = list[country];
          const countryDial = `+${countryData.dialCode}`;

          if (dialCode.startsWith(countryDial) && dialLength === countryDial.length) {
            this.countryActive = countryData;
          }
        });
      }
    },

    /**
     * Выбор активной страны, а так же последующая фокусировка на поле ввода телефона
     * @param {Object} country [Объект выбранной страны]
     */
    setCountryFromList(country) {
      this.hideDropdownList();
      this.countryActive = country;

      const phone = country.dialCode;
      this.emitValue(phone);
      /**
       * Общий метод для инпутов
       */
      this.focusOnInput();
    },

    setDropdownDirection(direction) {
      this.dropdownDirection = direction;
    },
  },
};
</script>

<style lang="sass">
  @import '@/assets/sass/input.sass'
  @import '@/assets/sass/vars.sass'
  @import '@/assets/sass/mixins.sass'

  .input__container-with-dropdown
    z-index: 2

  .input__flag-icon
    height: 20px
    width: 30px
    max-height: 20px

  .input__wrap-open
    border: 2px solid #fff !important
    &.bottom
      border-bottom-right-radius: 0 !important
      border-bottom-left-radius: 0 !important
    &.top
      border-top-right-radius: 0 !important
      border-top-left-radius: 0 !important
</style>

<docs>
```
new Vue({
  data() {
    return {
      userPhone: '',
    };
  },
  template: `
    <div>
      <InputPhone
        v-model="userPhone"
        title="Номер телефона"
      />
    </div>
  `
})
```
</docs>