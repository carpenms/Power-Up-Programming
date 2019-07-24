<template>
    <div>
        <top-scroll :categories="categories"></top-scroll>
        <Hot v-if="this.$store.state.page === 'Hot' "></Hot>
        <Special v-else></Special>
    </div>
</template>

<script>
    import topScroll from "../components/top-scroll"
    import Hot from "../components/Hot"
    import Special from "../components/Special"
    import axios from 'axios'

    const url_categories = 'http://localhost:3001/';
    export default {
        name: "Home",
        components: {topScroll, Hot, Special},
        mounted() {
            axios
                .get(url_categories,{
                    headers:{'Access-Control-Allow-Origin':'*'}
                })
                .then(response => {
                    console.log(response);
                    let categories = [];
                    for (let c in response.data.categories){
                        categories.push(response.data.categories[c].Name)
                    }
                    this.categories = categories
                })
        },
        data: function () {
            return {
                categories: [
                    "Hot",
                    "Html",
                    "Js",
                    "Python",
                    "Golang",
                    "C++",
                    "Ruby",
                    "DeepLearning",
                ],
            }
        }
    }
</script>

<style scoped>

</style>