import { createStore } from 'vuex'
import { INCREMENT_N } from './mutation-types'
import axios from 'axios'

const store = createStore({
  state: {
    counter: 100,
    name : 'lan',
    age : 18,
    height : 1.8,
    books : [
      {name : '深入Vuejs', price: 200, count : 3},
      {name : '深入Webpack',price : 200, count : 5},
    ],
    disCount : 0.63,
    banners : []
  },
  mutations: {
    increment (state) {
      state.counter ++;
    },
    decrement (state) {
      state.counter --;
    },
    [INCREMENT_N] (state, payload) {
      console.log(payload);
      state.counter += payload.n;
    },
    addBannerData (state, payload) {
      state.banners = payload
    }
  },
  getters: {
    totalPrice (state, getters) {
      let totalPrice = 0;
      for ( const book of state.books) {
        totalPrice += book.count * book.price;
      }

      return totalPrice * getters.currentDiscount;
    },
    currentDiscount (state, getters) {
      return state.disCount * 0.9;

    },
    totalCounterGreaterN(state ,getters) {
      return function (n) {
        let totalPrice = 0;
        for ( const book of state.books) {
          if (book.count > n) {
            totalPrice += book.count * book.price;
          }
        }
        return totalPrice * getters.currentDiscount;
      }
    },
    nameInfo (state, getters) {
      return `name : ${state.name}`;
    },
    ageInfo (state, getters) {
      return `age : ${state.age}`;
    }
  },
  actions: {
    // 1. 参数问题
    incrementAction (context, payload) {
      console.log(payload);
      setTimeout(() => {
        context.commit(INCREMENT_N, payload);
      }, 1000);
    },
    // 2. context的其他属性
    decrementAction ({commit, dispatch, state, rootState, getters, rootGetters }) {
      commit("decrement"); 
    },
    getHomeMultidata (context) {
      return new Promise((resolve, reject) => {
        axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
          context.commit("addBannerData", res.data.data.banner.list);
          resolve()
        }).catch(err => reject(err))
      })

    }
  },
  modules: {
  }
})

export default store