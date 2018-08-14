/**
 * @mixin
 */
export default {
  props: {
    /**
     * Флаг состояния лоадера в кнопке.
     * При активном лоадере текст в кнопке становится бесцветным.
     */
    isLoaded: {
      type: Boolean,
      required: false,
      default: false,
    },
    /**
     * Флаг состояния кнопки.
     * Кнопка становится неактивной при значении true.
     */
    isDisabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    /**
     * Массив классов модикификаторов
     */
    buttonPayload() {
      const classList = [{
        'button--disabled': this.isDisabled,
        'button--loaded': this.isLoaded,
      }];
      classList.push(...this.modificator);
      return {
        classList,
        isLoaded: this.isLoaded,
      };
    },
  },
};