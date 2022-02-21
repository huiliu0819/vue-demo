import Vue from 'vue'
import App from './App.vue'
import gloable from './utils/index'
import Loading from './components/loading/index'
import store from './store/index'
console.log(store)
Vue.config.productionTip = false
Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})

Vue.use(Loading)
Vue.prototype.bus = new Vue()

Vue.directive('jspang', (el, binding, vnode) => {
  console.log(el)
  console.log(binding)
  console.log(vnode)
  el.style = 'color:' + binding.value
})

Object.keys(gloable).forEach(key => {
  Vue.filter(key, gloable[key])
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
