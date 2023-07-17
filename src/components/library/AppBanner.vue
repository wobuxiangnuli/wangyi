<template>
   <el-carousel class="s" height="500px">
      <el-carousel-item v-for="item in list" :key="item.id">
        <img :src="item.bannerUrl" alt="">
      </el-carousel-item>
    </el-carousel>
</template>

<script>
    export default {
    name:"AppBanner",
    props:{
        list:{
            type:Array,
            default:[]
        }
    }
    }
</script>

<style lang="less" scoped>




.s{
  background-color:black;
}

</style>