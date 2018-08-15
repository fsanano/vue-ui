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
          document.querySelector('body').classList.remove('scroll__disabled');
        },
        /**
         * Enable scroll prevent
         */
        enable() {
          document.querySelector('body').classList.add('scroll__disabled');
        },
      };
    },
  };

  if (process.browser) {
    Vue.use(preventScroll);
  }
};
