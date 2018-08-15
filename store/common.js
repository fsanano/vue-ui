/* eslint-disable */
import Vue from 'vue';

const SET_USER_DEVICE = 'COMMON/SET_USER_DEVICE';
const SET_ASIDE_STATUS = 'COMMON/SET_ASIDE_STATUS';

const state = () => ({
  isMobile: false,
  aside: {
    signin: false,
    signup: false,
    profile: false,
  },
});

const getters = {};

const actions = {
  setUserDevice({ commit }, val) {
    commit(SET_USER_DEVICE, val);
  },

  setAsideStatus({ commit }, payload) {
    commit(SET_ASIDE_STATUS, payload);
  }
};

const mutations = {
  [SET_USER_DEVICE](state, val) {
    state.isMobile = val;
  },
  [SET_ASIDE_STATUS](state, payload) {
    const { name, status } = payload;
    Vue.set(state.aside, name, status);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
