<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "App",

    mounted() {
        console.log(process.env.VUE_APP_TEST)
    },
}
</script>

<style>
*,
*::before,
*::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
</style>
