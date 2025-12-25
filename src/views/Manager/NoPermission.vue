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
                    <h1>Bro以为自己是Big Boss，能掌管这里的所有权限</h1>
                    <img :src="img" />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
import Header from "@/views/components/header.vue";
import AsideMenu from "@/views/components/aside.vue";

const img = "/api/EvilLoud.png";
</script>

<style scoped>
img {
    width: 200px;
}
</style>
