<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <router-view></router-view>

    <router-link to="/home/message">HomeMessage</router-link>
    <router-link to="/home/shop">商品</router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',

}
</script>
