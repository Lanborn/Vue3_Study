<template>
    <div>
        <h2 class="title"
            ref="titleRef">
            {{message}}
        </h2>
        <button @click="addMessageContent">添加内容</button>
    </div>
</template>

<script>
    import { ref, nextTick } from 'vue';
    export default {
        setup() {
            const message = ref("")
            const titleRef = ref(null) 
            const addMessageContent = () => {
                message.value += '哈哈哈哈'

                // 先更新DOM
                nextTick(()=>{
                console.log(titleRef.value.offsetHeight);

                })
                
            }



            return {
                message,
                titleRef,
                addMessageContent
            }
        }
    }
</script>

<style scoped>
    .title{
        width: 120px;
    }
</style>