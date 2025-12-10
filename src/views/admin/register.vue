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

                <el-main class="login-card"> </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup name="login" lang="ts">
import Header from "../index/header.vue";
import AsideMenu from "../index/aside.vue";
import { RouterLink } from "vue-router";
import { reactive, ref } from "vue";
</script>

<style scoped></style>
