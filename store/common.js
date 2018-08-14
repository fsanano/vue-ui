/* eslint-disable */
const SET_USER_DEVICE = 'COMMON/SET_USER_DEVICE';

const state = () => ({
  isMobile: false,
});

const getters = {};

const actions = {

  setUserDevice({ commit }, val) {
    commit(SET_USER_DEVICE, val);
  },
};

const mutations = {
  [SET_USER_DEVICE](state, val) {
    state.isMobile = val;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
