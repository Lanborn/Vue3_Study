<template>
    <div>
        <hr>
            <h2>当前计数: {{$store.state.counter}}</h2>
        <hr>
            <button @click="increment">+1</button>

    </div>
</template>

<script>
    import { INCREMENT_N } from '../store/mutation-types'
    import { mapMutations } from 'vuex'
    import axios from 'axios'

    export default {
        methods : {
            increment() {
                this.$store.dispatch("incrementAction", {n : 1000});
            },
            decrement() {
                this.$store.dispatch({
                    type : 'decrementAction',
                    
                })
            }
        },
        mounted() {
            this.$store.dispatch("getHomeMultidata")
        },
    }
</script>

<style scoped>

</style>