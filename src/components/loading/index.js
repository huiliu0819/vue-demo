import Vue from 'vue'
import LoadingCom from './loading.vue'

const loading = {
  install: function() {
    Vue.component('Loading', LoadingCom)
  }
}

export default loading