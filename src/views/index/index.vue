<template>
    <div class="common-layout" style="overflow: hidden">
        <el-container>
            <el-header height="4rem" class="header">
                <Header />
            </el-header>
            <el-container>
                <el-aside width="12rem">
                    <AsideMenu />
                </el-aside>

                <el-main>
                    <div>
                        <h1>网页简介</h1>
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup name="index">
import { reactive, ref } from "vue";
import Header from "./header.vue";
import AsideMenu from "./aside.vue";
</script>

<style scoped></style>
