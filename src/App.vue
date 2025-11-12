<template>
    <el-config-provider :locale="locale">
        <router-view :key="route.fullPath"></router-view>
    </el-config-provider>
</template>

<script setup>
import { useRoute } from "vue-router";
import locale from "element-plus/es/locale/lang/zh-cn";

const route = useRoute();
</script>
