/* eslint-disable */
const SET_USER_DATA = 'AUTH/SET_USER_DATA';
const RESET_USER_DATA = 'AUTH/RESET_USER_DATA';

const state = () => ({
  /**
   * Флаг состояния аунтентификации пользователя
   * @type {Boolean}
   */
  auth: true,
  /**
   * Данные пользователя
   * @type {Object}
   */
  data: {},
});

const getters = {};

const actions = {
  setUserData({ commit }, data) {
    commit(SET_USER_DATA, data);
  },
  logout({ commit }) {
    commit(RESET_USER_DATA);
  },
};

const mutations = {
  [SET_USER_DATA](state, data) {
    state.auth = true;
    state.data = data;
  },
  [RESET_USER_DATA](state) {
    state.auth = false;
    state.data = {};
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
