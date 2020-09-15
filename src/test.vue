<template>
    <div>
        <h2>Hello from test {{ params }}</h2>
    </div>
</template>

<script>
export default {
    name: "test",
    data() {
        return {
            params: this.$route.params.id,
        }
    },
}
</script>

<style scoped></style>
