<template>
    <div class="container">
        <div class="logo">
            <img :src="Logo" alt="Logo" />
            <h2>Manga Reader</h2>
        </div>
        <div class="link">
            <a href="#">Home</a>
            <a href="#">List Anime</a>
            <a href="#">FAQ</a>
        </div>
    </div>
</template>

<script>
import icon from "@/assets/comic.png"

export default {
    name: "Header",
    data() {
        return {
            Logo: icon,
        }
    },
}
</script>

<style scoped>
a {
    color: black;
    text-decoration: none;
}

.container {
    width: 100%;
    height: 12vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
}

.logo img {
    max-width: 100%;
}

.logo {
    margin-left: 5%;
    display: flex;
    width: 50px;
}

.link a {
    padding: 5px 10px;
    font-size: 13pt;
    font-weight: bold;
    margin: 0 5px;
}

.link {
    margin-right: 5%;
}

.link a:hover {
    background: black;
    color: whitesmoke;
}
</style>
