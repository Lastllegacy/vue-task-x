import { createStore } from 'vuex'

export default createStore({
  state: {
    id: "None",
    
  },
  getters: {

  },
  mutations: {
    changeId(state, id) {
      state.id = id
    }
   },
  actions: {

    setId (id) {
      commit(changeId,id)
    }

  }
})
