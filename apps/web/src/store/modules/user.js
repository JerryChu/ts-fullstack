import { DEMO_USER } from "@/config/const";

const state = {
  userInfo: JSON.parse(localStorage.getItem(DEMO_USER)),
};

const mutations = {
  setUser(state, userInfo) {
    localStorage.setItem(DEMO_USER, JSON.stringify(userInfo));
    state.userInfo = userInfo;
  },
  removeUser(state) {
    localStorage.removeItem(DEMO_USER);
    state.userInfo = {};
  }
};

const getters = {
  userInfo: (state) => state.userInfo,
};

const actions = {
  async login({ commit }, userInfo) {
    commit('setUser', userInfo);
  },
  async logout({ commit }) {
    commit('removeUser');
  }
};

export default {
  namespaced: true,
  state, 
  mutations,
  getters,
  actions,
}