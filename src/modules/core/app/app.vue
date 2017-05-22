<!-- 异步加载外部文件   lang="es6" es6 对应 webpack.config.js 中的配置 -->
<script lang="es6" src="./app.js">
</script>
<template>
    <div>
        <h1>姓名：{{name}}</h1>
        <h2>{{age}}</h2>
    </div>
</template>

<!-- 加载外部脚本 lang="scss" 对应 webpack.config.js 中的配置 scoped 样式只对当前组件有效 -->
<style lang="scss" scoped src="./app.scss">

</style>