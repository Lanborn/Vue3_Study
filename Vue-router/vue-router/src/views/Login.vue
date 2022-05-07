<template>
    <div>
        <button @click="loginClick">Login</button>
    </div>
</template>

<script>
    import { useRouter } from 'vue-router';
    export default {
        setup() {
            const router = useRouter()

            const loginClick = () => {

                window.localStorage.setItem("token", 'lan')
                router.push({
                    path : '/home'
                })
            }

            return { 
                loginClick
            }
        }
    }
</script>

<style scoped>

</style>