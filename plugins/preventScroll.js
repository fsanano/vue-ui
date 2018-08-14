/* eslint-disable no-shadow */
import Vue from 'vue';

export default ({ store }) => {
  const preventScroll = {
    install() {
      Vue.prototype.$preventScroll = {
        /**
         * Disable scroll prevent
         */
        disable() {
          document.querySelector('body').classList.remove('scroll__disable');
        },
        /**
         * Enable scroll prevent
         */
        enable() {
          document.querySelector('body').classList.add('scroll__disable');
        },
      };
    },
  };

  if (process.browser) {
    Vue.use(preventScroll);
  }
};
