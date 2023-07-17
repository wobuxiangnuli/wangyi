<template>
    <div class="home-new">
        <MyPanel title="新鲜好物" subTitle="新鲜出炉,品质靠谱">
            <template #right>
                <AppMore path="/">
                </AppMore>
            </template>
            <ul class="goods-list">
                <li class="items hoverShadow" v-for="item in goods" :key="item.id">
                    <router-link to="/">
                        <img :src="item.listPicUrl" alt="">
                        <div class="title ellipsis">{{ item.name }}</div>
                        <div class="price">${{ item.retailPrice }}<del>{{ item.counterPrice }}</del></div>
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
    components: {
        MyPanel
    },
    setup(props) {
        const goods=ref([]);
        const getNewlist = async () => {
            try {
                const res = await getNew();
                if (res.code = '200') {
                    goods.value = res.data.data.result.slice(0, 4)
                }
            } catch (error) {
                console.log(error);
            }
        }
        getNewlist();

        return {goods}
    }
}
</script>

<style lang="less" scoped>
.home-new {
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
            }

            .price {
                color: red;
                text-align: center;
                margin-top: 15px;
                font-size: 14px;

                del {
                    color: grey;
                    margin: 0 10px;
                }
            }
        }
    }
}</style>