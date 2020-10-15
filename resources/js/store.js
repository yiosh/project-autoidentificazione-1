import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    form: {
      nome: "",
      cognome: "",
      codice_fiscale: "",
      username: "",
      email: ""
    }
  },
  mutations: {
    setStep: (state, payload) => state.form = Object.assign(state.form, payload)
  },
  actions: {
    handleStep({ commit }, payload) {
      commit("setStep", payload.payload);
    }
  }
});

export default store;