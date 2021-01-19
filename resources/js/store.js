import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        form: {
            nome: localStorage.nome ? localStorage.nome : "",
            cognome: localStorage.cognome ? localStorage.cognome : "",
            codice_fiscale: localStorage.codice_fiscale
                ? localStorage.codice_fiscale
                : "",
            username: localStorage.username ? localStorage.username : "",
            email: ""
        }
    },
    mutations: {
        setStep: (state, payload) =>
            (state.form = Object.assign(state.form, payload))
    },
    actions: {
        handleStep({ commit }, payload) {
            commit("setStep", payload.payload);
        }
    }
});

export default store;
