<template>
  <div class="hello">
    <!-- <h1 v-jspang="color">{{ num | toUpper }}</h1>
    <button @click="add">按钮</button>
    <Loading></Loading> -->
    <div @click="handleAdd">点击</div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      num: 'qweqwe',
      color: 'red',
      items: []
    }
  },
  computed: {
    ...mapState({
      count: 'count'
    }),
    ...mapGetters({
      doubleCount: 'doubleCount'
    })
  },
  methods: {
    ...mapMutations(['add']),
    handleAdd () {
      console.log(this.bus)
      this.bus.$emit('someEvent', 1)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.classA {
  color: red;
}

.classB {
  background-color: skyblue;
}
</style>
