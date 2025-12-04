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

                <el-main class="login-card">
                    <el-card>
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
    margin-top: 40px;
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-self: start;
}
</style>
