import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    setUsers(state, value) {
      state.users = value
    },
    clearUsers(state) {
      state.users = []
    },
  },
  actions: {
    setUsers({commit}, value) {
      commit('setUsers', value)
    },
    clearUsers({commit}) {
      commit('clearUsers')
    },
  },
  modules: {
  },
  getters: {
    getUsers(state) {
      return state.users
    }
  }
})
