import { createStore } from 'vuex'
import homeModule from './modules/home'
import userModule from './modules/user'

const store = createStore({
  state : {
    rootCounter : 0,
  },
  mutations : {
    increment(state) {
      state.rootCounter ++;
    }
  },
  getters : {

  },
  actions : {

  },
  modules : {
    home : homeModule,
    user : userModule,
  }
})

export default store