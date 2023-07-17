<template>
    <!--顶部通栏-->
    <AppTopNav/>
    <MyHeader/>
    <Home/>



    <!--主题区域-->
   

</template>

<script>
import AppTopNav from '@/components/AppTopNav.vue'
import MyHeader from '@/components/MyHeader.vue'
import Home from './Home/Home.vue'
    export default {
        components:{
            AppTopNav,
            MyHeader,
            Home
        }
    }
</script>

<style lang="scss" scoped>

</style>