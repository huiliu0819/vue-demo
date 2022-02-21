<template>
  <div class="hello">
    <div @click="clickTest">测试</div>
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
  created() {
    this.bus.$on('someEvent', (data) => {
        console.log(data)
      } )
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
      this.add(1)
    },
    clickTest () {
      this.bus.$on('someEvent', (data) => {
        console.log(data*2)
      } )
    }
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
