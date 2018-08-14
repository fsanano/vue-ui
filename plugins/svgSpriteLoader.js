/**
 * Плагин для создания svg спрайта.
 * Исходники иконок должны лежать в /assets/img.
 * Названия иконок должны быть УНИКАЛЬНЫМИ.
 * Можно свободно группировать иконки в директории.
 */
if (process.browser) {
  const files = require.context('~/assets/img/sprite/svg/', true, /\.svg$/);
  files.keys().forEach(files);
}
