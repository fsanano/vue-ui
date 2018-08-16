/* eslint-disable */
import Vue from 'vue';

const SET_ASIDE_STATUS = 'ASIDE/SET_ASIDE_STATUS';

const state = () => ({
  aside: {
    signin: false,
    signup: false,
    profile: true,
  },
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
    Vue.set(state.aside, name, status);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
