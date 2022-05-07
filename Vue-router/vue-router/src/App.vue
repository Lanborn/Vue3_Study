<template>
  <div id="nav">
    <!-- props: href 跳转的链接 -->
    <!-- props: route对象 -->
    <!-- props: navigate 导航   添加 custom属性来自定义 -->
    <!-- props: isActive 当前是否处于活跃状态 -->
    <!-- props: isExactActive 当前是否精确处于活跃状态 -->
    <router-link to="/home" v-slot="props" custom>
        <!-- <button @click="props.navigate">{{props.href}}</button>
        <button @click="props.navigate">{{props.route}}</button> -->
        <!-- <span :class="{'active': props.isActive}">{{props.isActive}}</span> -->
        <!-- <span :class="{'active': props.isActive}">{{props.isExactActive}}</span> -->
        <button @click="props.navigate">哈哈</button>
        <button @click="props.navigate">/home</button>
    </router-link>
    <router-link to="/about">
      About
    </router-link>
    <router-link :to="'/user/' + p.name + '/id/' + p.id">
      Users
    </router-link>

    <router-link to="/category">分类</router-link>

    <button @click="jumpToAbout">关于</button>
    <button @click="forwardOneStep">前进一步</button>

    <router-view v-slot="props">
      <transition name="lan">
        <component :is="props.Component"></component>
      </transition>
    </router-view>
  </div>
</template>
 
<script>
  import { reactive } from 'vue'
  import { useRouter } from 'vue-router'
  import  NavBar from './components/Navbar.vue'  
  export default {
    name : "App",
    components : {
      NavBar,
    },
    methods: {
      // jumpToAbout() {
      //   console.log(this);
      //   this.$router.push({
      //     path : 'about',
      //   })
      // }
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

  .lan-enter-from,
  .lan-leave-to {
    opacity: 0;
  }

  .lan-enter-active,
  .lan-leave-active {
    transition: opacity 1s ease;
  }
</style>
