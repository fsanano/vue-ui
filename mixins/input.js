/**
 * @mixin
 */
export default {
  props: {
    /**
     * Заголовок поля
     */
    title: {
      type: String,
      required: false,
      default: '',
    },
    /**
     * Плайсхолдер поля
     */
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
    /**
     * Флаг существования ошибки
     */
    isError: {
      type: Boolean,
      required: false,
      default: false,
    },
    /**
     * Текст ошибки
     */
    errorText: {
      type: String,
      required: false,
      default: '',
    },
    /**
     * Флаг состояния поля
     */
    isDisabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    /**
     * Метод позволяет фокусировать на поле ввода,
     * при клике на любой другой сторонний элемент существующий в компоненте.   
     * Поле обязательно должно иметь ref="input"
     * @public focus
     * @type {Function}
     */
    focusOnInput() {
      this.$refs.input.focus();
    },
  },
  computed: {
    /**
     * Массив классов модикификаторов
     */
    modificators() {
      const classList = [{
        'input__wrap--disabled': this.isDisabled,
        'input__wrap--error': this.isError,
      }];
      const modificator = this.inputContainerModificator;
      if (modificator) {
        classList.push(...modificator);
      }
      return classList;
    },
    /**
     * Общая нагрузка на контейнер всех полей
     * @return {Object} [Объект со всеми флагами и данными]
     */
    containerPayload() {
      const { title, errorText, isError, modificators } = this;
      return {
        title, errorText, isError, modificators,
      };
    },
  },
};
