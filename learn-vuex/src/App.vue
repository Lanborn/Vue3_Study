<template>
  <div id="nav">
    <Home />
    <h2>{{$store.state.rootCounter}}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
  import { useStore } from 'vuex'
  import Home from './components/Home.vue'
  export default {
  components: { Home },
    setup() {
      const store = useStore();
      const increment = () => store.commit("increment");
      
      return {
        store,
        increment,
      }
    } 
  }
</script>

<style>
</style>
