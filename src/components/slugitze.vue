<template>
    <div class="app">
        <div class="container">
            <input type="text" v-model="text" />
            <h2>{{ 
                text.toLowerCase()
                .replace(/[^\w ]+/g, ' ')
                .replace(/ +/g, '-') 
            }}</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            text: "none",
        }
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

input {
    padding: 10px;
    font-size: 14pt;
    margin-bottom: 10px;
}

.container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>
