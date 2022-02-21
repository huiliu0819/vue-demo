const state = {
  products: [
    {id: 1, title: 'iphone 11', price: 4000},
    {id: 2, title: 'iphone 12', price: 5000}
  ]
}

const getters = {}

const actions = {}

const mutations = {
  setProducts (state, payload) {
    state.products = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}