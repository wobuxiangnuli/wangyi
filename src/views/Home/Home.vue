<template>
    <div class="home w">
       <lunbo/>
       <HomeNew/>
       <HomeHot/>
       <Bedding/>
    </div>
    
</template>

<script>
import lunbo from './lunbo.vue';
import HomeNew from './HomeNew.vue';
import HomeHot from './HomeHot.vue';
import Bedding from './Bedding.vue';
    export default {
        components:{
            lunbo,
            HomeNew,
            HomeHot,
            Bedding
        }
    }
</script>

<style lang="scss" scoped>

</style>