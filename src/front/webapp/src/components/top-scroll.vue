<template>
    <div style="margin: 0;background: white; box-shadow: 2px 3px 3px 2px rgba(0,0,0,0.1);width: 100%; height: 40px;padding-top: 15px;overflow:scroll;white-space:nowrap;overflow-x: scroll;z-index: 999; ">
        <ul>
           <li v-for="(item,index) in categories" :key="index">
               <span :class="{'focus': item === currentPage}" @click="changePage(item)">{{item}}</span>
           </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "top-scroll",
        props:["categories"],
        data:function () {
            return {

            }
        },
        computed:{
            currentPage: function () {
                return this.$store.state.page
            }
        },
        methods:{
            changePage: function (item){
                this.$store.commit('changePage',item);
            }
        }
    }
</script>

<style scoped>
    ul {
        list-style: none;
        margin: 0;
    }
    li{
        display: inline;
        margin: 0 4px 0 4px;
        padding: 2.5px 2.5px 2.5px 2.5px;
        cursor: pointer;
    }
    .focus{
        color: #3498db;
    }
</style>