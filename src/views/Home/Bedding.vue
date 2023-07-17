<template>
    <div class="bed">
        <MyPanel title="床品" subTitle=" ">
            <template #right>
                <router-link class="right" v-for="ele in list" :key="ele.id" to="/">{{ ele.name }}<i>/</i></router-link>
                <AppMore path="/"></AppMore>
            </template>
        </MyPanel>
        <div class="middle">
            <img class="hoverda" src="@/assets/images/bed.webp" alt="">
        </div>
        <div class="btn">
            <ul class="goods-list">
                <li class="items " v-for="item in goods" :key="item.id">
                    <router-link to="/">
                        <img class="hoverda da" :src="item.listPicUrl" alt="">
                        <div class="title ellipsis">{{ item.name }}</div>
                        <div class="price">${{ item.retailPrice }}<del>{{ item.counterPrice }}</del></div>
                    </router-link>
                </li>
            </ul>
        </div>
        
        
    </div>
</template>

<script>
import MyPanel from '@/components/MyPanel.vue';
import { ref } from 'vue';
import { getNew } from '@/api';
import { getCategoryList } from '@/api';
    export default {

    components: { MyPanel },
    setup(props){
        const list=ref([]);
        const getbed=async()=>{
            try {
                const res = await getCategoryList();
                if(res.code='200'){
                    list.value=res.data.data.cateList[0].subCateList.slice(0,6);

                }
            } catch (error) {
                console.log(error);
            }
        }
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
        getbed();
        getNewlist();
        return {list , goods};
    }
}
</script>

<style lang="less" scoped>
.right{
    font-size: 16px;
    margin: 0 5px;
    color: grey;
    i{
        margin: 0 10px;
    }
    &:hover{
        color: @xtxcolor;
    }
}

.middle{
    margin-bottom: 10px;
}
.goods-list {
        display: flex;
        justify-content: space-between;

        .items {
            width: 265px;
            height: 365px;
            background-color: #f3f3f3;
            &:hover{
                background-color: @xtxcolor;
            }

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
    </style>