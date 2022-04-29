<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="getParams">按钮</button>
  </div>
</template>

<script>
  import { useRouter, useRoute } from 'vue-router'
  export default {
    setup() {
      const router = useRouter()
      const route = useRoute()
      const getParams = () => {
        // console.log(router);
        console.log(route);
        console.log(route.params);
        console.log(route.query);
        
      }

      return {
        getParams
      }
    }
  }
</script>
