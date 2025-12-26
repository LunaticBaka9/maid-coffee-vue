<template>
    <el-config-provider :locale="locale">
        <div class="common-layout" style="overflow: hidden">
            <el-container>
                <el-header height="4rem" class="header">
                    <Header />
                </el-header>
                <el-container>
                    <el-aside width="12rem">
                        <Aside />
                    </el-aside>

                    <router-view :key="route.fullPath"></router-view>
                </el-container>
            </el-container>
        </div>
    </el-config-provider>
</template>

<script setup>
import { useRoute } from "vue-router";
import locale from "element-plus/es/locale/lang/zh-cn";
import Header from "@/views/components/header.vue";
import Aside from "@/views/components/aside.vue";
const route = useRoute();
</script>
