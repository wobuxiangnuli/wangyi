<template>
    <router-link :to="path" class="more">
    <span>
        查看更多>
    </span></router-link>
</template>

<script>
    export default {
        name:'AppMore',
        props:{
            path:{
                type:String,
                default:"/",
            }
        }
    }
</script>

<style lang="less" scoped>
.more{
    span{
        font-size: 16px;
        color: grey;
        margin-right: 5px;
        &:hover{
            color: @xtxcolor;
        }
    }
}
</style>