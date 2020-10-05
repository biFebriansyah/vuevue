<template>
    <div class="app">
        <header v-if="chart.length > 0">
            <h3 class="chart">Chart:</h3>
            <p>{{ chart.length }}</p>
        </header>
        <div class="inp">
            <input type="text" class="inputan" v-model="maximum" />
            <input type="range" min="0" max="125" v-model="maximum" />
        </div>
        <div class="content" v-for="item in items" :key="item">
            <div class="container" v-if="item.price <= Number(maximum)">
                <Button class="add" @click="addChart(item)">+</Button>
                <div class="pic">
                    <img :src="item.image" alt="" />
                </div>
                <div class="desc">
                    <h2 class="name" @click="goto(item)">{{ item.name }}</h2>
                    <p class="detail">
                        {{ item.description }}
                    </p>
                    <h3 class="price">{{ item.price }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"

const datas = [
    {
        id: "532",
        name: "Slicker Jacket",
        description:
            "Wind and rain are no match for our organic bamboo slicker jacket for men and women. Triple stitched seams, zippered pockets, and a stay-tight hood are just a few features of our best-selling jacket.",
        price: "125",
        image_title: "slicker-jacket_lynda_29941",
        image: "https://hplussport.com/wp-content/uploads/2016/12/slicker-jacket_LYNDA_29941.jpg",
    },
    {
        id: "530",
        name: "Bamboo Thermal Ski Coat",
        description:
            "You'll be the most environmentally conscious skier on the slopes - and the most stylish - wearing our fitted bamboo thermal ski coat, made from organic bamboo with recycled plastic down filling.",
        price: "99",
        image_title: "ski-coat_lynda_29940",
        image: "https://hplussport.com/wp-content/uploads/2016/12/ski-coat_LYNDA_29940.jpg",
    },
    {
        id: "516",
        name: "Unisex Thermal Vest",
        description:
            "Our thermal vest, made from organic bamboo with recycled plastic down filling, is a favorite of both men and women. You'll help the environment, and have a wear-easy piece for many occasions.",
        price: "95",
        image_title: "unisex-thermal-vest_lynda_29944",
        image:
            "https://hplussport.com/wp-content/uploads/2016/12/unisex-thermal-vest_LYNDA_29944.jpg",
    },
    {
        id: "514",
        name: "Grunge Skater Jeans",
        description:
            "Our boy-cut jeans are for men and women who appreciate that skate park fashions aren't just for skaters. Made from the softest and most flexible organic cotton denim.",
        price: "68",
        image_title: "unisex-grunge-jeans_lynda_29937",
        image:
            "https://hplussport.com/wp-content/uploads/2016/12/unisex-grunge-jeans_LYNDA_29937.jpg",
    },
]

const product = {
    id: "532",
    name: "Slicker Jacket",
    description:
        "Wind and rain are no match for our organic bamboo slicker jacket for men and women. Triple stitched seams, zippered pockets, and a stay-tight hood are just a few features of our best-selling jacket.",
    price: "125",
    image_title: "slicker-jacket_lynda_29941",
    image: "https://hplussport.com/wp-content/uploads/2016/12/slicker-jacket_LYNDA_29941.jpg",
}

export default {
    name: "Product",
    data() {
        return {
            prod: product,
            datas: datas,
            maximum: 100,
            chart: [],
            items: null,
        }
    },
    methods: {
        addChart(value) {
            this.chart.push(value)
        },
        goto(data) {
            this.$router.push({ name: "detail", params: { data } })
        },
        goParams(id) {
            this.$router.push({ path: `/test/${id}` })
        },
    },
    mounted() {
        axios
            .get("https://hplussport.com/api/products/order/price")
            .then((res) => {
                this.items = res.data
            })
            .catch((err) => {
                console.log(err)
                this.items = datas
            })
    },
}
</script>

<style>
header {
    background: rgb(167, 167, 167);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 20px;
}

header p {
    padding: 5px 5px;
    background: rgb(52, 156, 4);
    border-radius: 40%;
    color: white;
}

.add {
    width: 50px;
    height: 30px;
    background: blue;
    border: none;
    color: white;
    font-size: 14pt;
    border-radius: 5px;
    cursor: pointer;
}

img {
    max-width: 100%;
}

.pic {
    width: 400px;
}

.inp {
    width: 100%;
    display: flex;
    padding: 20px 0;
    justify-content: center;
}

.detail {
    line-height: 20px;
    font-size: 14pt;
    margin-bottom: 20px;
}

.name {
    margin-bottom: 20px;
    color: rgb(0, 153, 255);
}

.price {
    text-align: right;
    margin-right: 20px;
    color: rgb(124, 123, 123);
}

.desc {
    width: 40%;
}

.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
</style>
