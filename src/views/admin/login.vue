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
                        <el-form ref="form" :model="userVo" label-width="100px">
                            <el-form-item label="用户姓名">
                                <el-input v-model="userVo.username" placeholder="请输入用户名"></el-input>
                            </el-form-item>

                            <el-form-item label="用户密码">
                                <el-input placeholder="请输入密码" v-model="userVo.password" show-password></el-input>
                            </el-form-item>

                            <el-form-item>
                                <el-button type="primary">登录</el-button>
                                <el-button>
                                    <router-link to="register"><span>注册</span></router-link>
                                </el-button>
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

const userVo = reactive({
    username: "",
    password: "",
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
