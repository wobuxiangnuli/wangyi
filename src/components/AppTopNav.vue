<template>
    <div class="top-nav">
        <div class="w">
            <ul>
                <template v-if="false">
                <li><a href="javascript:;">张三</a></li>
                <li><a href="javascript:;">退出登录</a></li>
                </template>
                <li v-else><router-link to="/login">登录/注册</router-link></li>
                <li><a href="javascript:;">我的订单</a></li>
                <li><a href="javascript:;">会员</a></li>
                <li><a href="javascript:;">甄选家</a></li>
                <li><a href="javascript:;">企业采购</a></li>
                <li><a href="javascript:;">客户服务</a></li>
                <li><a href="javascript:;">
                    <i class="iconfont iconfontshouji"></i>
                    APP</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
import {useStore} from 'vuex';
import { computed } from 'vue';
    export default {
        setup(props){
            const store = useStore();
            let userinfo = computed(()=>{
                return store.state.state.userinfo;
            });
        }
    }
</script>

<style lang="less" scoped>

.top-nav {
    background-color: #333;
    ul{
        display: flex;
        height: 36px;
        line-height: 36px;
        justify-content: flex-end ;
    }
    li{
        a{
            padding: 0 10px;
            color: #ccc;
            border-left: 1px solid #ccc;
            &:hover{
                color:@xtxcolor;
            }
        }
    }
    li:nth-child(1){
        a{
            border-left: 0px;
        }
        
    }
    
}
</style>