<template>
    <div class="container">
        <div class="pic">
            <img :src="data.image" alt="" />
        </div>
        <div class="desc">
            <h2 class="name">{{ data.name }}</h2>
            <p class="detail">
                {{ data.description }}
            </p>
            <h3 class="price">{{ data.price }}</h3>
            <router-link to="/" class="back">Back</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "detail",
    props: {
        data: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style lang="scss" scoped>
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
