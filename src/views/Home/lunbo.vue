<template>
    <AppBanner :list='list'/>
</template>

<script>
import { ref } from 'vue';
import {getCategoryList} from '@/api';
    export default {
        setup(props){
             const list = ref([]);
             const getNewlist = async () => {
            try {
                const res = await getCategoryList();
                console.log(res.data.data.cateList[0].subCateList.slice(0,6));
                if (res.code = '200') {
                    list.value=res.data.data.cateList[0].subCateList.slice(0,6)
                }
            } catch (error) {
            console.log(error);
            }
        }
        getNewlist();
             return { list }
        }
        
    }
</script>

<style lang="less" scoped>

</style>