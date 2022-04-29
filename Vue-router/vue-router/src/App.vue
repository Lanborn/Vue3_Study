<template>
  <div id="nav">
    <router-link
     to="/home"
    >
      Home
    </router-link> |
    <router-link
     to="/about"
    >
      About
    </router-link> |
    <router-link
     :to="'/user/' + p.name + '/id/' + p.id"
    >
      Users
    </router-link>
    <!-- <router-link
     to="/user/Lan"
    >
      Users
    </router-link> -->

    <button @click="jumpToAbout">关于</button>
    <button @click="forwardOneStep">前进一步</button>

    <router-view></router-view>
  </div>
</template>

<script>
  import { reactive, ref } from 'vue'
  import { useRouter } from 'vue-router'
  export default {
    name : "App",
    component : {

    },
    methods: {
      jumpToAbout() {
        console.log(this);
        this.$router.push({
          path : 'about',
        })
      }
    },
    setup() {
      const p = reactive({
        name : 'lan',
        id : 1
      });

      const router = useRouter()

      const jumpToAbout = () => {
        router.push({
          path : '/about',
          query : {
            name : 'lan'
          }
        })
      }

      const forwardOneStep = () => {
        router.go(1)
      }

      return { 
        p,
        jumpToAbout,
        forwardOneStep
      }
    }
  }
</script>

<style>
  .lan-active {
    color: skyblue;
  }
</style>
