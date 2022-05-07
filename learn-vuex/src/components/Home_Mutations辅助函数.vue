<template>
    <div>
        <hr>
            <h2>当前计数: {{$store.state.counter}}</h2>
        <hr>
            <button @click="increment">+1</button>
            <!-- <button @click="add">+1</button> -->

            <button @click="decrement">-1</button>
            <button @click="increment_n({n : 10})">+10</button>

    </div>
</template>

<script>
    import { INCREMENT_N } from '../store/mutation-types'
    import { mapMutations } from 'vuex'

    export default {
        // methods : {
        //     ...mapMutations(["increment", "decrement", INCREMENT_N]),
        //     ...mapMutations({
        //         add : "increment"
        //     })
        // },
        setup() {
            const storeMutations = mapMutations(["increment", "decrement", INCREMENT_N])

            return { 
                ...storeMutations
            }
        }
    }
</script>

<style scoped>

</style>