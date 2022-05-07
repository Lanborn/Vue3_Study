<template>
    <div>
        <hr>
            <h2>当前计数: {{$store.state.counter}}</h2>
        <hr>
            <button @click="increment">+1</button>

    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    import axios from 'axios'

    export default {
        // methods : {
        //     ...mapActions(["incrementAction", "decrementAction"]),
        //     ...mapActions({
        //         add : "incrementAction",
        //         sub : "decrementAction"
        //     })
        // },
        mounted() {
            this.$store.dispatch("getHomeMultidata")
        },

        setup() {
            const actions = mapActions(["incrementAction", "decrementAction"])
            const actions2 = mapActions({
                add : "incrementAction",
                sub : "decrementAction"
            })

            return { 
                actions,
                actions2
            }
        }
    }
</script>

<style scoped>

</style>