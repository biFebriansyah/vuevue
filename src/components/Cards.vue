<template>
    <div class="container">
        <div class="image">
            <img :src="images" :alt="names" />
        </div>
        <div class="desc">
            <h3 class="name">{{ names }}</h3>
            <p class="chapter">{{ chapters }}</p>
            <p class="rating">{{ ratings }}</p>
        </div>
    </div>
</template>

<script>
// import img from "@/assets/Dice.jpg"

export default {
    name: "Cards",
    props: {
        images: {
            type: String,
            required: true,
        },
        names: {
            type: String,
            required: true,
        },
        chapters: {
            type: String,
            required: true,
        },
        ratings: {
            type: String,
            required: true,
        },
    },
}
</script>

<style scoped>
.test {
    display: flex;
    flex-wrap: wrap;
}

p {
    font-size: 11pt;
    font-weight: 600;
}

.container {
    margin: 10px 10px;
    position: relative;
    padding: 10px;
    width: 200px;
}

.container:hover {
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
}

.image img {
    max-height: 100%;
}

.image {
    height: 250px;
}

.name {
    margin: 5px 0;
}

.rating {
    font-size: 10pt;
    color: grey;
    text-align: right;
}
</style>
