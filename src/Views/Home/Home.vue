<template>
    <div class="container">
        <header>
            <Header />
        </header>
        <main>
            <Cards />
        </main>
    </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Cards from "@/components/Cards.vue"


export default {
    name: "Home",
    components: {
        Header,
        Cards,
    },
}
</script>

<style scoped>
main {
    display: flex;
    flex-direction: row;
    padding-top: 20px;
    margin-left: 10px;
}
</style>
