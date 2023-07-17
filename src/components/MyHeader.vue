<template>
    <div class="w my-header">
        <!--头部上边-->
        <div class="header-top">
            <h1 class="logo">
                <router-link to="/"></router-link>
            </h1>

            <div class="center">
                <div class="center-search">
                    <input type="text" :placeholder=pl>
                    <button class="search-btn">搜索</button>
                </div>
                <ul class="center-navs">
                    <li><a href="#">床垫</a></li>
                    <li>|</li>
                    <li><a href="#">咖啡</a></li>
                    <li>|</li>
                    <li><a href="#">蓝牙耳机</a></li>
                    <li>|</li>
                    <li><a href="#"></a>鞋</li>
                    <li>|</li>
                    <li><a href="#"></a>床</li>
                    <li>|</li>
                    <li><a href="#"></a>洗衣液</li>
                    <li>|</li>
                    <li><a href="#"></a>睡衣</li>
                    <li>|</li>
                    <li><a href="#"></a>纸巾</li>
                    <li>|</li>
                    <li><a href="#"></a>收纳</li>
                </ul>
            </div>
            <div class="cart">
                <span class="cart-icon"></span>
                <a href="">购物车</a> 
            </div>
        </div>
    <HeaderNav/>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import HeaderNav from './HeaderNav.vue';
export default {
   
    components:{
        HeaderNav
    },
    setup(props){
        const store = useStore();
        store.dispatch('category/getAllCategory');
        const pl = computed(()=>{
            return store.state.category.placeholder;
        })
        return {pl}
    }
}
</script>

<style lang="less" scoped>
.my-header {
    height: 120px;
    background-color: #fff;
    padding: 25px 0 0 0;

    .header-top {
        display: flex;

        .logo {
            width: 212px;
            height: 60px;

            a {
                display: inline-block;
                width: 100%;
                height: 60px;
                background: url('../assets/images/logo.webp');
                background-size: cover;
                background-repeat: no-repeat;
                background-position: 0 -298px;
            }
        }

        .center {
            flex: 1;
            padding-left: 110px;
            .center-search {
                width: 540px;
                height: 36px;
            }
            .center-navs{
                width: 540px;
                li{
                    float: left;
                    height: 32px;
                    padding: 5px;
                    &:hover{
                            color: @xtxcolor;
                        }
                
                }
                li:nth-child(even){
                        color: #ccc;
                    }
            }

            input {
                width: 440px;
                height: 36px;
                box-sizing: border-box;
                border: 1px solid @xtxcolor;
                border-radius: 20px 0 0 20px;
                padding-left: 25px;
            }

            .search-btn {
                width: 100px;
                height: 36px;
                float: right;
                border-radius: 0 20px 20px 0;
                border: 1px solid @xtxcolor;
                background-color: @xtxcolor;
                color: white;
                font-size: 16px;
                cursor: pointer;
            }
        }
        .cart{
            width: 133px;
            height: 35px;
            line-height: 35px;
            border-radius: 20px;
            border: 1px solid @xtxcolor;
            font-size: 16px;
            display: flex;
            &:hover{
                background-color: #cccccc;
            }
            .cart-icon{
                display: inline-block;
                width: 30px;
                height: 30px;
            }
            a{
            color: @xtxcolor;
            } 


        }

    }
}
</style>