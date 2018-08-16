/* eslint-disable */
import Vue from 'vue';

const SET_ASIDE_STATUS = 'ASIDE/SET_ASIDE_STATUS';

const state = () => ({
  /**
   * Флаги состояния видимости сайдбаров
   * @type {Boolean}
   */
  signin: false,
  signup: false,
  profile: false,
  refill: false,
  withdrawal: false,
  /**
   * Данные для вывода в сайдбаре пользователя
   * Могут быть данные любого пользователя.
   * @type {Object}
   */
  profileData: {},
});

const getters = {};

const actions = {
  setAsideStatus({ commit }, payload) {
    commit(SET_ASIDE_STATUS, payload);
  }
};

const mutations = {
  [SET_ASIDE_STATUS](state, payload) {
    const { name, status } = payload;
    Vue.set(state, name, status);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
