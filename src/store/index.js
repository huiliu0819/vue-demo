import Vue from 'vue';
// import Vuex from 'vuex';
import Vuex from '../myVuex'
// import products from './modules/products'
// import cart from './modules/cart'
Vue.use(Vuex);
const store = new Vuex.Store({
  strict: true,
  state: {
    count: 1,
    message: 'msg'
  },
  getters: {
    doubleCount: state => {
      return state.count * 2
    },
    reserveMsg: state => {
      console.log(state)
      return state.message.split('').reverse().join('')
    }
  },
  actions: {
    addAsync (context, payload) {
      setTimeout(() => {
        context.commit('add', payload)
      }, 2000)
    }
  },
  mutations: {
    add (state, payload) {
      console.log(payload)
      state.count += payload
    }
  },
  // modules: {
  //   products,
  //   cart
  // }
});
 
export default store;