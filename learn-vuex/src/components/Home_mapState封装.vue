<template>
    <div>
        <h2>Home : {{name}}</h2>
        <h2>Home : {{sName}}</h2>
    </div>
</template>

<script>
    import { useState } from '../hooks/useState'

    export default {
        setup() {
            const storeState = useState(["counter", "name", "age", "height"]);
            const storeState2 = useState({
                sCounter : state => state.counter,
                sName : state => state.name,

            })

            return {
                ...storeState,
                ...storeState2
            }
        }
    }
</script>

<style scoped>

</style>