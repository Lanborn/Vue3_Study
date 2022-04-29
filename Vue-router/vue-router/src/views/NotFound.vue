<template>
    <div>
        <h2>Page Not Found</h2>
        <p>您打开的路径页面不存在，请不要再使用这个程序了。</p>
        <h2>Not Found: {{ $route.params.pathMatch }}</h2>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="less" scoped>

</style>