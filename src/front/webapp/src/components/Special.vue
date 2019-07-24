<template>
    <div style="margin-bottom: 10px">
        <div v-for="(course,index) in courses" style="margin-left: 7%;width:40%;float: left;display: inline;margin-top: 15px" :key="index">
            <iframe style="border-radius: 15px" width="100%" height="150px"
                    :src="course" frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
        </div>

    </div>
</template>

<script>
    import axios from 'axios'

    const url_special = 'http://localhost:3001/home';
    export default {
        name: "Special",
        mounted() {
            const url = url_special + '?' + 'category=' + this.$store.state.page;
            this.getData(url)
        },
        data: function () {
            return {
                courses: []
            }
        },
        computed: {
            currentPage: function () {
                return this.$store.state.page
            }
        },
        methods: {
            getData: function (url) {
                axios.get(url)
                    .then(response => {
                            let urls = [];
                            for (let u in response.data.Courses) {
                                urls.push(response.data.Courses[u].Url)
                            }
                            this.courses = urls;
                            console.log(urls);
                        }
                    )
                    .catch(err => {
                        console.log("alert err");
                        console.log(err)
                    })
            }
        },
        watch: {
            currentPage: function () {
                const url = url_special + '?' + 'category=' + this.$store.state.page;
                this.getData(url)
            }
        }
    }
</script>

<style scoped>

</style>