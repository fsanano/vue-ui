/* eslint-disable */
const SET_USER_DATA = 'AUTH/SET_USER_DATA';

const state = () => ({
  auth: false,
  data: {},
});

const getters = {};

const actions = {
  setUserData({ commit }, data) {
    commit(SET_USER_DATA, data);
  },
};

const mutations = {
  [SET_USER_DATA](state, data) {
    state.auth = true;
    state.data = data;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
