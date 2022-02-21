<template>
  <div id="app">
      <h1>Vuex - Demo</h1>
      count: {{ $store.state.count }} --- msg: {{ $store.state.message  }}
      <h2>Getter</h2>
      reverseMsg: {{  $store.getters.reserveMsg }}

      <h2>Mutation</h2>
      <!-- <button @click="$store.commit('add', 1)">Mutation</button> -->
      <button @click="$store.commit('add', 2)">Mutation</button>
      <h2>Action</h2>
      <button @click="$store.dispatch('addAsync', 4)">Action</button>
  </div>
</template>

<script>
// import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
