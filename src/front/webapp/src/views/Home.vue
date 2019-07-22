<template>
    <div>
        <top-scroll></top-scroll>
        <Hot v-if="this.$store.state.page === 'Hot' "></Hot>
        <Special v-else></Special>
    </div>
</template>

<script>
    import topScroll from "../components/top-scroll"
    import Hot from "../components/Hot"
    import Special from "../components/Special"

    export default {
        name: "Home",
        components: {topScroll, Hot, Special},
    }
</script>

<style scoped>

</style>