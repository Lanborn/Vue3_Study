<template>
    <div>
        <hr>
            <h2>Home : {{homeCounter}}</h2>
            <h2>Home : {{doubleHomeCounter}}</h2>


            <h2>当前计数: {{$store.getters["home/doubleHomeCounter"]}}</h2>

            <button @click="increment">home+1</button>
            <button @click="incrementAction">home+1</button>

        <hr>
    </div>
</template>

<script>
    import { createNamespacedHelpers } from 'vuex'

    const { mapGetters, mapState, mapMutations, mapActions } = createNamespacedHelpers("home")

    import {useState} from '../hooks/useState'
    import {useGetters} from '../hooks/useGetters'

    export default {

        
        computed : {
            // 写法一：
            // ...mapState({
            //     homeCounter : state => state.home.homeCounter
            // }),
            // ...mapGetters({
            //     doubleHomeCounter : "home/doubleHomeCounter"
            // })
            
            // 写法二: 
            // ...mapState("home", ["homeCounter"]),
            // ...mapGetters("home", ["doubleHomeCounter"])

            // 写法三：
            // ...mapState(["homeCounter"]),
            // ...mapGetters(["doubleHomeCounter"])
        },
        methods: {
            // ...mapMutations({
            //     increment : "home/increment"
            // }),
            // ...mapActions({
            //     incrementAction : "home/incrementAction"
            // })

            // 写法二：
            // ...mapMutations("home", ["increment"]),

            // ...mapActions("home", ["incrementAction"]),

            // 写法三：
            // ...mapMutations(["increment"]),
            // ...mapActions(["incrementAction"]),

        },

        setup() {
            const state = useState("home",["homeCounter"])

            const getters = useGetters("home" ,["doubleHomeCounter"])

            const mutations = mapMutations(["increment"])

            const actions = mapActions(["incrementAction"])

            return { 
                ...state,
                ...getters,
                ...mutations,
                ...actions,
            }
        }
    }
</script>

<style scoped>

</style>