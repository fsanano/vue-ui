<template>
  <div class="stock__container">
    <div class="d-flex">
      <div>
        <div
          class="stock__title"
          v-html="title"
        />
        <div class="stock__content">
          <!-- @slot Текст акции -->
          <slot/>
        </div>
      </div>
      <img
        src="/promo-coin.png"
        alt="promo_coin"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheStock',
  props: {
    title: {
      type: String,
      required: false,
      default: 'Акция!',
    },
  },
};
</script>

<style lang="sass">
  @import '@/assets/sass/vars.sass'
  .stock__container
    margin: 0 30px
    padding: 30px 25px
    max-width: 328px
    background: #1d1721

  .stock__title
    margin-bottom: 5px
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 26px
    font-weight: 700
    color: $accent

  .stock__content
    font-size: 18px
    line-height: 1.5
    font-weight: 300

</style>

<docs>
```
<TheStock>Текст акции</TheStock>
```
</docs>
