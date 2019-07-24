<template>
    <div>
        <Swiper v-if="banners.length > 0" style="width: 92%;height: 200px;border-radius: 5px;margin: 15px auto"
                :autoPlay='false' :showIndicator="false">
            <Slide v-for="(item,index) in banners" :key="index">
                <iframe width="100%" height="180px"
                        :src="item" frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                <div style="height: 20px;background: white"></div>
            </Slide>
        </Swiper>
        <div style="margin-bottom: 10px">
            <div v-for="(course,index) in courses"
                 style="margin-left: 7%;width:40%;float: left;display: inline;margin-top: 15px" :key="index">
                <iframe style="border-radius: 15px" width="100%" height="150px" :src="course" frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>

<script>
    import {Swiper, Slide} from 'vue-swiper-component';
    import axios from 'axios';

    const url_special = 'http://localhost:3001/home';
    export default {
        name: "Hot",
        components: {
            Swiper,
            Slide
        },
        mounted() {
            const url = url_special + '?' + 'category=Hot';
            this.getData(url)
        },
        data: function () {
            return {
                banners: [],
                courses: []
            }
        },
        methods: {
            getData: function (url) {
                axios.get(url)
                    .then(response => {
                            let urls = [];
                            for (let u in response.data.Courses) {
                                if (u === 0 || u === 1) {
                                    continue
                                }
                                urls.push(response.data.Courses[u].Url)
                            }
                            this.banners.push(urls[0]);
                            this.banners.push(urls[1]);
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
    }
</script>

<style scoped>

</style>