<template>
    <div class="home-hot">
        <MyPanel title="人气推荐" subTitle="人气爆款,不容错过">
            <template #right>
                <AppMore path="/">
                </AppMore>
            </template>
            <ul class="goods-list">
                <li class="items hoverShadow" v-for="ele in lists" :key="ele.id">
                    <router-link to="/">
                        <img :src="ele.listPicUrl" alt="">
                        <div class="title">{{ ele.name }}</div>
                        </router-link>
                </li>
            </ul>
        </MyPanel>
    </div>
</template>

<script>
import { ref } from 'vue';
import MyPanel from '@/components/MyPanel.vue';
import { getNew } from '@/api';
    export default {
        components:{
            MyPanel
        },
        setup(props){
            const lists=ref([]);
            const getNewHot = async()=>{
                try {
                    const res = await getNew();
                    if (res.code = '200') {
                    lists.value = res.data.data.result.slice(5, 9)
                }
                } catch (error) {
                    console.log(error);
                }
            }
            getNewHot();
            return {lists}
        }
    }
</script>

<style lang="less" scoped>
.home-hot{
    .goods-list {
        display: flex;
        justify-content: space-between;

        .items {
            width: 265px;
            height: 365px;
            background-color: #f3f3f3;

            img {
                width: 265px;
                height: 265px;
            }

            .title {
                padding: 0 10px;
                margin-top: 20px;
                font-size: 16px;
                text-align: center;
            }
        }
    }
}
</style>