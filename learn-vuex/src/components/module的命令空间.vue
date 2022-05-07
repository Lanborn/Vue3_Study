<template>
    <div>
        <hr>
            <h2>当前计数:Root: {{$store.state.rootCounter}}</h2>
            <h2>当前计数:Home: {{$store.state.home.homeCounter}}</h2>
            <h2>当前计数:user: {{$store.state.user.userCounter}}</h2>

            <h2>当前计数: {{$store.getters["home/doubleHomeCounter"]}}</h2>

            <button @click="homeIncrement">home+1</button>
            <button @click="homeIncrementAction">home+1</button>

        <hr>
    </div>
</template>

<script>
    export default {
        methods: {
            homeIncrement() {
                this.$store.commit("home/increment")
            },
            homeIncrementAction() {
                this.$store.dispatch("home/incrementAction")
            }
        }
    }
</script>

<style scoped>

</style>