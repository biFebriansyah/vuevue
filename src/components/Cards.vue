<template>
    <div class="test">
        <div class="container" v-for="data in datas" :key="data.id">
            <div class="image">
                <img :src="data.image" alt="Dice" />
            </div>
            <div class="desc">
                <h3 class="name">{{ data.name }}</h3>
                <p class="chapter">{{ data.chapter }}</p>
                <p class="rating">{{ data.rating }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import img from "@/assets/Dice.jpg"

const data = [
    {
        id: 1,
        name: "Akuyaku Reijou Reberu 99",
        chapter: "Ch.325",
        rating: "9.0",
        image: "https://komikcast.com/wp-content/uploads/2020/02/dsadsad2edafafc.jpg",
    },
    {
        id: 2,
        name: "The Legend of Mage",
        chapter: "Ch.25",
        rating: "7.90",
        image: "https://komikcast.com/wp-content/uploads/2020/05/legeafasne.jpg",
    },
    {
        id: 3,
        name: "Slave B",
        chapter: "Ch.38",
        rating: "8.00",
        image: "https://komikcast.com/wp-content/uploads/2020/04/Slave-B-e1587506688440.png",
    },
    {
        id: 4,
        name: "The Developer System",
        chapter: "Ch.86",
        rating: "7.90",
        image: "https://komikcast.com/wp-content/uploads/2020/04/0l02-e1586910153901.jpg",
    },
    {
        id: 5,
        name: "RWBY",
        chapter: "Ch.11",
        rating: "7.67",
        image: "https://komikcast.com/wp-content/uploads/2017/07/177617-2.jpg",
    },
    {
        id: 6,
        name: "Kanojo, Okarishimasu",
        chapter: "Ch.153",
        rating: "8.20",
        image:
            "https://komikcast.com/wp-content/uploads/2020/07/2agg21fgaaasd51-e1596014400327.jpg",
    },
    {
        id: 7,
        name: "Magic Emperor",
        chapter: "Ch.120",
        rating: "8.00",
        image: "https://komikcast.com/wp-content/uploads/2019/10/magic-emperor.jpg",
    },
    {
        id: 8,
        name: "Kemono Giga",
        chapter: "Ch.11",
        rating: "7.20",
        image: "https://komikcast.com/wp-content/uploads/2020/08/kemogadfi-e1597578174675.jpg",
    },
    {
        id: 9,
        name: "Lasboss x Hero",
        chapter: "Ch.18",
        rating: "5.80",
        image: "https://komikcast.com/wp-content/uploads/2017/10/a2-1-190x300.jpg",
    },
]

export default {
    name: "Cards",
    data() {
        return {
            image: img,
            datas: data,
        }
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
