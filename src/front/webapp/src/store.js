import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      page: "Hot"
  },
  mutations: {
    changePage(state,name){
      state.page = name
    }
  },
  actions: {

  }
})
