
<template>
    <div class="my-panel">
        <div class="header">
            <h3>{{ title }} <small>{{ subTitle }}</small></h3>
            <slot  name="right"></slot>
        </div>
        <slot></slot>
    </div>
    
</template>

<script>
    export default {
        props:{
            title:{
                type:String,
                default:'主标题'
            },
            subTitle:{
                type:String,
                default:'副标题'
            }
        }
    }
</script>

<style lang="less" scoped>
.my-panel{
    background-color: #fff;
    .header{
        padding: 40px 0;
        display: flex;
        align-items: flex-end;
        h3{
            flex: 1 ;
            font-size: 32px;
            text-align: left;
            font-weight:normal;
            small{
                font-size: 16px;
                color: #999;
                margin-left: 10px;
            }
        }
    }
}

</style>