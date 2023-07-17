import {getCategoryList} from '@/api/index'
export default{
    namespaced:true,
    state:()=>{
        return{
            cateList:[],
            placeholder:''
        }
    },
    mutations:{
        setList(state,payload){
            state.cateList = payload;
        },
        updatapl(state,playod){
            state.placeholder = playod;
        }
    },
    actions:{
        async getAllCategory({commit}){
            try {
                const res = await getCategoryList();
                if(res.data.code==200){
                     commit('setList',res.data.data.cateList),
                     commit('updatapl',res.data.data.searchDefaultWordVO.content)
                     
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
}