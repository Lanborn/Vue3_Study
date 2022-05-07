<template>
    <div>
        <hr>
            <h2>当前计数: {{$store.state.counter}}</h2>
        <hr>
            <button @click="increment">+1</button>

    </div>
</template>

<script>
    import { useStore, mapActions } from 'vuex'
    import { onMounted } from 'vue';

    export default {
        setup() {
            const store = useStore();
            onMounted(()=> {
                const Promise =  store.dispatch("getHomeMultidata");
                Promise.then((res)=> {
                    console.log(res);
                }).catch(err => {
                    console.log(err);
                })
            })

            return { 
            }
        }
    }
</script>

<style scoped>

</style>