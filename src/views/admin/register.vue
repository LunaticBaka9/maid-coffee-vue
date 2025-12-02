<template>
    <div class="common-layout" style="overflow: hidden">
        <el-container>
            <el-header height="4rem" class="header">
                <Header></Header>
            </el-header>
            <el-container>
                <el-aside width="12rem">
                    <AsideMenu />
                </el-aside>

                <el-main>
                    <el-card class="login-card">
                        <el-form ref="form" :model="regForm" :rules="regRules" label-width="100px">
                            <el-form-item prop="name" label="用户名">
                                <el-input v-model="regForm.name" placeholder="请输入用户名"></el-input>
                            </el-form-item>
                            <el-form-item prop="password" label="请输入密码">
                                <el-input v-model="regForm.password" placeholder="请输入密码"></el-input>
                            </el-form-item>
                            <el-form-item prop="repassword" label="请确认密码">
                                <el-input v-model="regForm.repassword" placeholder="请确认密码"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-form-item>
                                    <el-button class="btn-reg" type="primary" @click="reg(regForm)">注册</el-button>
                                    <el-button>
                                        <router-link to="login"><span>去登录</span></router-link>
                                    </el-button>
                                </el-form-item>
                            </el-form-item>
                        </el-form>
                    </el-card>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup name="login" lang="ts">
import Header from "../index/header.vue";
import AsideMenu from "../index/aside.vue";
import { RouterLink } from "vue-router";
import { reactive, ref } from "vue";

const regForm = reactive({
    name: "",
    password: "",
    repassword: "",
});

const regRules = reactive({
    username: [
        { required: true, message: "请输入用户名", trigger: "blur" },
        { min: 5, max: 10, message: "用户名必须是 5-10位 的字符", trigger: "blur" },
    ],
    password: [
        { required: true, message: "请输入密码", trigger: "blur" },
        {
            pattern: /^\S{6,15}$/,
            message: "密码必须是 6-15位 的非空字符",
            trigger: "blur",
        },
    ],
    repassword: [
        { required: true, message: "请再次输入密码", trigger: "blur" },
        {
            //自定义校验 validator
            validator: (rule, value, callback) => {
                // 判断 value 和 当前 form 中收集的 password 是否一致
                if (value !== formModel.value.password) {
                    callback(new Error("两次输入密码不一致"));
                } else {
                    callback(); // 就算校验成功，也需要callback
                }
            },
            trigger: "blur",
        },
    ],
});
</script>

<style scoped>
/* 登录表单 */
.login-card {
    width: 500px;
}

.login {
    height: 100%;
    /* flex样式呈现*/
    display: flex;
    /*垂直排列*/
    flex-direction: column;
    align-items: center; /*由于flex-direction: column，因此align-items代表的是水平方向*/
    justify-content: center; /*由于flex-direction: column，因此justify-content代表的是垂直方向*/
}
</style>
