<template>
  <label>
    <slot/>

    <input
      type="file"
      class="d-none"
      accept="image/jpeg,image/png,image/gif"
      @change="handleFileChange"
    >
  </label>
</template>

<script>
/**
 * Компонент поля типа file, возвращает объект file в base64
 */
export default {
  name: 'InputFile',
  props: {
    /**
     * Присваемое значение
     */
    value: {
      type: Object,
      required: false,
      default: null,
    },
  },

  methods: {
    /**
     * Конвертация файла в base64
     * @param  {File} file [Загруженный файл]
     * @return {String}    [Строка в base64]
     */
    fileToBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    },
    /**
     * Конвертация размера файла из байт в мегабайты
     * @param  {Number} size [размер файла в байтах]
     * @return {Number}      [Размер файла в мегабайтах]
     */
    byteToMb(size) {
      return size/1024/1024;
    },
    /**
     * Валидация размера файла
     * @param  {Number} size [размер файла в байтах]
     * @return {Boolean|Object}      [Сообщение об ошибке или false]
     */
    validateFileSize(size) {
      const mb = this.byteToMb(size);
      if (mb > 2) {
        return 'Размер файла превышает ограничение в 2 мб.';
      } else {
        return false;
      }
    },
    /**
     * Передача файла в родителький компонент
     * @event change
     * @type {string}
     */
    emitData(data) {
      this.$emit('input', data);
    },
    /**
     * Обработка события загрузки файла
     * @param  {Object} e [Объект события]
     * @return {Function}    [Вызов события]
     */
    async handleFileChange(e) {
      const file = e.target.files[0];
      const { name, size } = file;
      const error = this.validateFileSize(size);
      if( error ) {
        this.emitData({ error });
      } else {
        const img = await this.fileToBase64(file);
        this.emitData({ error, name, img });
      }
    },
  },
};
</script>

<style lang="sass" scoped>
</style>

<docs>
```
new Vue({
  data() {
    return {
      file: '',
    };
  },
  template: `
    <div>
      <InputFile v-model="file"/>
    </div>
  `
});
```
</docs>