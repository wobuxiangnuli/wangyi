export default{
    namespaced:true,
    state:()=>{
        return{
            userinfo:{
                token:'123',
                username:'赵三',
            }
        }
    },
    mutations:{
        updataname(state,payload){
            state.userinfo.username = payload;
        }
    },
    actions:{}
}