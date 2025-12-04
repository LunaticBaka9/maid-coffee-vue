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

                <el-main></el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup name="ShopManager">
import Header from "@/views/index/header.vue";
import AsideMenu from "@/views/index/aside.vue";
</script>
