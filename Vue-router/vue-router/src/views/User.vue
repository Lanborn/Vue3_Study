<template>
    <div>
        User: {{$route.params.username}}-{{$route.params.id}}
    </div>
</template>

<script>
    import { useRoute } from 'vue-router'
    export default {
        created() {
            console.log(this.$route.params.username);
        },
        setup() {
            const route = useRoute()
            console.log(route);
            console.log(route.params);
        }
    }
</script>

<style scoped>

</style>