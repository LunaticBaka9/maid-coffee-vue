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
                    <div
                        style="width: 350px; height: 400px; background-color: #ffff; border-radius: 5px; padding: 20px"
                    >
                        <el-form
                            ref="formRef"
                            :model="data.form"
                            :rules="data.rules"
                            label-width="80px"
                            style="padding: 20px 30px 10px 0"
                        >
                            <div style="margin: 20px 0; text-align: center; font-weight: bold; font-size: 24px">
                                登 录
                            </div>
                            <el-from-item prop="username" label="账号">
                                <el-input
                                    v-model="data.form.username"
                                    autocomplete="off"
                                    size="large"
                                    prefix-icon="User"
                                    placeholder="请输入账号"
                                    style="margin: 20px 0"
                                />
                            </el-from-item>
                            <el-from-item prop="password" label="账号">
                                <el-input
                                    v-model="data.form.password"
                                    autocomplete="off"
                                    show-password="true"
                                    size="large"
                                    prefix-icon="Lock"
                                    placeholder="请输入密码"
                                />
                            </el-from-item>
                            <div>
                                <el-button
                                    size="large"
                                    type="primary"
                                    style="width: 100%; margin: 20px 0"
                                    @click="login"
                                >
                                    登 录
                                </el-button>
                            </div>
                            <div style="text-align: right">
                                还没有账号？请<a style="color: #274afa" href="/register">注册</a>
                            </div>
                        </el-form>
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup name="login" lang="ts">
import Header from "../index/header.vue";
import AsideMenu from "../index/aside.vue";
import { reactive, ref } from "vue";
import request from "../../utils/request";
import { ElMessage, ElMessageBox } from "element-plus";
import router from "../../router";

const formREF = ref();

const data = reactive({
    form: {},
    rules: {
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
    },
});

const login = () => {
    request.post("/login", data.form).then((res) => {
        if (res.code === "200") {
            //存储用户信息
            localStorage.setItem("code_user", JSON.stringify(res.data || "{}"));
            ElMessage.success("登录成功");
            router.push("/");
        } else {
            ElMessage.error(res.msg);
        }
    });
};
</script>

<style scoped>
/* 登录表单 */
.login-card {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-top: 0;
}
</style>
