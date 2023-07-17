<template>
    <ul class="header-nav">
        <li class="nav-name">
            <RouterLink class="" to="/">首页</RouterLink>
        </li>
        <li class="header-nav-first nav-name" v-for="item in list" :key="item.id">
            <RouterLink class="" :to="'/category/'+item.id">{{ item.name }}</RouterLink>
            <!--弹出层-->
            <div class="layer">
                <ul>
                    <li class="nav-name" v-for="ele in item.subCateGroupList" :key="ele.id">
                        <a href="#">
                            <img src="" alt="">
                        </a>
                    <li class="first-name">
                        <a href="#">{{ ele.name }}</a>
                        <hr>
                    <li v-for="ele2 in ele.categoryList" :key="ele2.id">
                        <img :src="ele.categoryList[0].bannerUrl">
                        <a href="#">
                            {{ ele2.name }}
                        </a>
                    </li>
        </li>
        </li>
    </ul>
    </div>
    </li>
    </ul>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
    setup(props) {
        const store = useStore();
        const list = computed(() => {
            return store.state.category.cateList;
        })

        return { list }
    }
}
</script>

<style lang="less" scoped>
.header-nav {
    position: relative;

    .header-nav-first {

        &:hover {
            .layer {
            display: block;
            }

        }

    }

    .nav-name {
        float: left;
        padding: 0 15px;
        font-size: 14px;
        font-weight: bold;
        line-height: 40px;

        a:hover {

            color: @xtxcolor;
        }
    }

    .layer {
        width: auto;
        position: absolute;
        background-color: white;
        left: 0;
        top: 40px;
        display: none;
        transition: all .5s;
        z-index: 10;
        ul {
            float: left;
        }
    }

    .first-name {
        float: left;
        font-size: 18px;
        font-weight: bold;
        white-space: nowrap;
        max-height: 280px;
        overflow: hidden;

        li {

            a {
                display: inline-block;
                width: 65px;
                font-size: 15px;
                justify-items: center;
            }

            img {
                width: 50px;
                height: 50px;
                margin: 0;
                padding: 0;
                vertical-align: middle;
            }
        }
    }


}</style>