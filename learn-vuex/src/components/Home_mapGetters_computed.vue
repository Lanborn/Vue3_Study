<template>
    <div>
        <hr>
            <h2>总价值: {{$store.getters.totalPrice}}</h2>
            <h2>总价值: {{$store.getters.totalCounterGreaterN(4)}}</h2>
        <hr>
            <h2>{{nameInfo}}</h2>
            <h2>{{ageInfo}}</h2>
    </div>
</template>

<script>
    import { mapGetters} from 'vuex'
    export default {
        computed : {
            ...mapGetters(["nameInfo", "ageInfo"])
        }
    }
</script>

<style scoped>

</style>