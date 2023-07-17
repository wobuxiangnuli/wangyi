<template>
    <div class="login">
        <div class="input">
            <p>用户登录</p>
            <el-form :rules="rules" ref="ss" :model="ruleForm" label-width="100px">
                <el-form-item prop="username" label="账号">
                    <el-input v-model="ruleForm.username" placeholder="账号名/邮箱/手机号"></el-input>
                </el-form-item>
                <el-form-item prop="password" label="密码">
                    <el-input v-model="ruleForm.password" show-password type="password" placeholder="请输入登陆密码"></el-input>
                </el-form-item>
                <el-form-item>
      <el-button type="primary" @click="submitForm(ruleForm)"
        >Submit</el-button
      ></el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script setup>
import {ref,unref, reactive} from 'vue'

const ruleForm = ref([]);
const ss = ref();

const rules = reactive({
    username: [
        { required:true, message: '用户名不能为空', trigger: 'blur' },
        { min:6, max:16, message: '用户名长度为6-16位', trigger: 'blur' },
    ],
    password: [
        { required:true, message: '密码不能为空', trigger: 'blur' },
        { min:10, max:16, message: '密码长度为10-16位', trigger: 'blur' },
    ]
})  

const submitForm = ()=>{
    const form = unref(ss);
    try {
        let res= form.validate();
        console.log(res);
        if (res) {
            console.log('11111', 45);
        }
    } catch (err) {
        console.log(err, 48);
    }

   
    
}

</script>

<style lang="less" scoped>
.login {
    width: 100%;
    height: 90vh;
    margin: 30px 0;
    background: url('../assets/images/login.jpg') no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
}

.input {
    height: 40vh;
    width: 30%;
    background-color: white;
    position: absolute;
    right: 50px;
    top: 100px;
    opacity: 0.8;
    text-align: center;
    padding-top: 30px;
    padding-right: 30px;
    color: black;

    p {
        font-size: 36px;
        margin-bottom: 30px;
    }

}
</style>