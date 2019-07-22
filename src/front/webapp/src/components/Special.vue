<template>
    <div style="margin-bottom: 10px">
        <div style="margin-left: 7%;width:40%;float: left;display: inline;margin-top: 15px">
            <iframe style="border-radius: 15px" width="100%" height="150px"
                    src="https://www.youtube.com/embed/PkZNo7MFNFg" frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
        </div>
        <div style="margin-left: 7%;width:40%;float: left;display: inline;margin-top: 15px">
            <iframe style="border-radius: 15px" width="100%" height="150px"
                    src="https://www.youtube.com/embed/PkZNo7MFNFg" frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
        </div>
        <div style="margin-left: 7%;width:40%;float: left;display: inline;margin-top: 15px">
            <iframe style="border-radius: 15px" width="100%" height="150px"
                    src="https://www.youtube.com/embed/PkZNo7MFNFg" frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
        </div>
        <div style="margin-left: 7%;width:40%;float: left;display: inline;margin-top: 15px">
            <iframe style="border-radius: 15px" width="100%" height="150px"
                    src="https://www.youtube.com/embed/PkZNo7MFNFg" frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
        </div>
        <div style="margin-left: 7%;width:40%;float: left;display: inline;margin-top: 15px">
            <iframe style="border-radius: 15px" width="100%" height="150px"
                    src="https://www.youtube.com/embed/PkZNo7MFNFg" frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
        </div>
        <div style="margin-left: 7%;width:40%;float: left;display: inline;margin-top: 15px">
            <iframe style="border-radius: 15px" width="100%" height="150px"
                    src="https://www.youtube.com/embed/PkZNo7MFNFg" frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
        </div>
        <div style="margin-left: 7%;width:40%;float: left;display: inline;margin-top: 15px">
            <iframe style="border-radius: 15px" width="100%" height="150px"
                    src="https://www.youtube.com/embed/PkZNo7MFNFg" frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
        </div>

    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Special",
        mounted() {
            this.getData("https://api.coindesk.com/v1/bpi/currentprice.json")
        },
        computed: {
            currentPage: function () {
                return this.$store.state.page
            }
        },
        methods: {
            getData: function (url) {
                axios.get(url)
                    .then(response => (console.log(response)))
                    .catch(err => {
                        console.log("alert err");
                        console.log(err)
                    })
            }
        },
        watch: {
            currentPage: function () {
                this.getData("https://api.coindesk.com/v1/bpi/currentprice.json")
            }
        }
    }
</script>

<style scoped>

</style>