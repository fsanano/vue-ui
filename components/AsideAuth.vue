<template>
  <AsideBase
    :name="name"
    :title="title"
    :status="status"
  >
    <form
      v-if="isCodeFormVisible"
      class="auth__container"
      @submit.prevent="confirmCode"
    >
      <div class="d-flex align-items-center mb-15">
        <InputCode
          v-model="code"
          title="Код"
          class="mr-10"
        />
        <ButtonLight
          :is-disabled="countdown > 0"
          typeof="code"
          @click.prevent.native="startCountdown"
        >
          <span
            v-if="countdown"
            class="btn__countdown"
            v-html="countdown"
          />
          Отправить еще раз
        </ButtonLight>
      </div>
      <ButtonPrimary
        class="mb-15"
        typeof="full"
      >
        Продолжить
      </ButtonPrimary>
      <ButtonLight typeof="full">Ввести другой email</ButtonLight>

    </form>
    <template v-else>
      <!-- @slot -->
      <slot :auth="auth"/>
    </template>
  </AsideBase>
</template>

<script>
import AsideBase from '@/components/AsideBase.vue';
import InputCode from '@/components/InputCode.vue';
import ButtonPrimary from '@/components/ButtonPrimary.vue';
import ButtonLight from '@/components/ButtonLight.vue';
/**
 * Компонент обертка для комопнентов входа и регистрации
 */
export default {
  name: 'AsideAuth',
  components: {
    AsideBase,
    InputCode,
    ButtonPrimary,
    ButtonLight,
  },
  mixins: [],
  props: {
    /**
     * Флаг видимости сайдбара
     */
    status: {
      type: Boolean,
      require: true,
      default: false,
    },
    /**
     * Заголовок сайдбара
     */
    title: {
      type: String,
      require: true,
      default: '',
    },
    /**
     * Название сайдбара
     */
    name: {
      type: String,
      require: true,
      default: '',
    },
  },
  data() {
    return {
      /**
       * Код подтверждения
       * @type {String}
       */
      code: '',
      /**
       * Таймер отсчета
       * @type {Number}
       */
      countdown: 60,
      /**
       * Флаг состояния формы ввода кода
       * @type {Boolean}
       */
      isCodeFormVisible: false,
    };
  },
  methods: {
    /**
     * Отправка email
     * @return {[type]} [description]
     */
    auth() {
      this.isCodeFormVisible = true;
      this.startCountdown();
    },
    /**
     * Подтверждение кода
     * @return {[type]} [description]
     */
    confirmCode() {
      this.isCodeFormVisible = false;
    },
    /**
     * Начало отсчета времени,
     * после которого можно заново запросить код подтверждения
     * @return {[type]} [description]
     */
    startCountdown() {
      this.countdown = 60;
      const interval = setInterval(() => {
        if (this.countdown === 0) {
          clearInterval(interval);
        } else {
          this.countdown = this.countdown - 1;
        }
      }, 1000);
    },
  },
};
</script>

<style lang="sass">
  @import '@/assets/sass/vars.sass'
  .btn__countdown
    width: 100%
    margin-bottom: 5px
    font-size: 16px
    color: white
</style>

<docs>
```
<AsideAuth/>
```
</docs>
