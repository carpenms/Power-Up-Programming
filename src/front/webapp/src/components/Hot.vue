<template>
   <div>
       <Swiper v-if="banners.length > 0" style="width: 92%;height: 200px;border-radius: 5px;margin: 15px auto" :autoPlay='false' :showIndicator="false">
           <Slide v-for="(item,index) in banners" :key="index">
               <iframe width="100%" height="180px"
                       :src="item" frameborder="0"
                       allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                       allowfullscreen></iframe>
               <div style="height: 20px;background: white"></div>
           </Slide>
       </Swiper>
       <div style="margin-bottom: 10px">
           <div style="margin-left: 7%;width:40%;float: left;display: inline;margin-top: 15px">
               <iframe style="border-radius: 15px" width="100%" height="150px" src="https://www.youtube.com/embed/PkZNo7MFNFg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           </div>
           <div style="margin-left: 7%;width:40%;float: left;display: inline;margin-top: 15px">
               <iframe style="border-radius: 15px" width="100%" height="150px" src="https://www.youtube.com/embed/PkZNo7MFNFg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           </div>
           <div style="margin-left: 7%;width:40%;float: left;display: inline;margin-top: 15px">
               <iframe style="border-radius: 15px" width="100%" height="150px" src="https://www.youtube.com/embed/PkZNo7MFNFg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           </div>
           <div style="margin-left: 7%;width:40%;float: left;display: inline;margin-top: 15px">
               <iframe style="border-radius: 15px" width="100%" height="150px" src="https://www.youtube.com/embed/PkZNo7MFNFg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           </div>
           <div style="margin-left: 7%;width:40%;float: left;display: inline;margin-top: 15px">
               <iframe style="border-radius: 15px" width="100%" height="150px" src="https://www.youtube.com/embed/PkZNo7MFNFg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           </div>
           <div style="margin-left: 7%;width:40%;float: left;display: inline;margin-top: 15px">
               <iframe style="border-radius: 15px" width="100%" height="150px" src="https://www.youtube.com/embed/PkZNo7MFNFg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           </div>
           <div style="margin-left: 7%;width:40%;float: left;display: inline;margin-top: 15px">
               <iframe style="border-radius: 15px" width="100%" height="150px" src="https://www.youtube.com/embed/PkZNo7MFNFg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           </div>
       </div>
   </div>
</template>

<script>
    import { Swiper, Slide } from 'vue-swiper-component';
    export default {
        name: "Hot",
        components: {
            Swiper,
            Slide
        },
        data: function () {
            return {
                banners:[
                    "https://www.youtube.com/embed/PkZNo7MFNFg",
                    "https://www.youtube.com/embed/rfscVS0vtbw"
                ]
            }
        }
    }
</script>

<style scoped>

</style>