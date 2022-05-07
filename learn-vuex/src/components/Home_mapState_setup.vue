<template>
    <div>
        <h2>Home : {{store.state.name}}</h2>
        <h2>Home : {{sCounter}}</h2>
        <h2>Home : {{name}}</h2>
    </div>
</template>

<script>
    import { mapState, useStore } from 'vuex'
    import { computed } from 'vue'

    export default {
        setup() {
            const store = useStore();
            const sCounter = computed(() => store.state.counter)

            // counter => func => computed(func) => counter
            const storeStateFns = mapState(["counter","name", "age", "height"])

            const storeState = {};
            Object.keys(storeStateFns).forEach(fnKey => {
                const fn = storeStateFns[fnKey].bind({$store : store});
                
                storeState[fnKey] = computed(fn);
            }) 

            return {
                store,
                sCounter,
                ...storeState
            }
        }
    }
</script>

<style scoped>

</style>