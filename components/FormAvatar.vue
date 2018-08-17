<template>
  <div
    class="form__avatar"
    @submit.prevent="send()"
  >
    <div class="avatar__title mb-15">
      Выберите аватар или
      <InputFile v-model="custom">
        <span class="avatar__label">загрузите свой</span>
      </InputFile>
    </div>

    <div class="avatar__list mb-15">
      <div
        v-if="custom"
        class="avatar__item"
      >
        <div
          class="avatar__close"
          @click="removeCustom"
        >
          <IconBase
            name="close"
            size="custom"
          />
        </div>
        <div
          :class="{'active': avatar === 'custom'}"
          class="avatar__img"
          @click="setAvatar('custom')"
        >
          <img
            :src="custom.img"
            alt="custom"
          >
        </div>
      </div>
      <div
        v-for="item in list"
        :key="item"
        class="avatar__item"
      >
        <div
          :class="{'active': avatar === item}"
          class="avatar__img"
          @click="setAvatar(item)"
        >
          <img
            :src="`/avatars/${item}.png`"
            :alt="item"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputFile from '@/components/InputFile.vue';
import IconBase from '@/components/IconBase.vue';
/**
 * Компонент формы добавления личных данных
 */
export default {
  name: 'FormCredentials',
  components: {
    InputFile,
    IconBase,
  },
  data() {
    return {
      avatar: '',
      custom: null,
      list: [
        'boo', 'cash', 'fight', 'fire', 'frog',
        'hmm', 'man', 'nose', 'pig', 'pinokkio',
        'shit', 'skull', 'ufo', 'wolf', 'woman',
      ],
    };
  },
  computed: {},
  watch: {
    custom(newVal) {
      if (newVal) {
        this.avatar = 'custom';
      }
    },
  },
  methods: {
    /**
     * Передача состояния формы родительскому компоненту
     */
    send() {
      this.$emit('step');
    },
    /**
     * Метод выбора аватара
     * @param {String} avatar [Название аватара]
     */
    setAvatar(avatar) {
      this.avatar = avatar;
    },
    /**
     * Метод удаления картинки залитой пользователем
     */
    removeCustom() {
      this.custom = null;
    },
  },
};
</script>

<style lang="sass">
  @import '@/assets/sass/vars.sass'
  .avatar__title
    font-size: 20px
    font-weight: bold

  .avatar__list
    display: flex
    flex-flow: row wrap
    width: 465px
    height: 280px
    overflow-y: auto
    overflow-x: hidden

  .avatar__item
    position: relative
    width: 20%
    padding: 10px

  .avatar__img
    position: relative
    display: flex
    align-items: center
    justify-content: center
    width: 73px
    height: 73px
    cursor: pointer
    img
      max-width: 100%
      max-height: 100%

    &.active
      &:after
        content: ''
        width: 100%
        height: 100%
        position: absolute
        z-index: 1
        box-shadow: inset 0 0 0 2px $accent

  .avatar__label
    position: relative
    color: $accent
    cursor: pointer
    &:hover
      &:after
        display: block
    &:after
      content: ''
      position: absolute
      display: none
      width: 100%
      height: 0
      left: 0
      bottom: 0
      border-bottom: 1px dashed $accent

  .avatar__close
    width: 25px
    height: 25px
    position: absolute
    z-index: 2
    right: 10px
    top: 10px
    background: $accent
    padding: 4px
    cursor: pointer
    svg
      fill: black
</style>

<docs>
```
<FormCredentials/>
```
</docs>
