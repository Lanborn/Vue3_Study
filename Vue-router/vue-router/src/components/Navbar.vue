<template>
    <div>
        <h2>{{title}}</h2>
    </div>
</template>

<script>
    export default {
        name : "NavBar",
        props : {
            title : {
                type : String,
                default : "haha",
            },
        }
    }
</script>

<style scoped>

</style>