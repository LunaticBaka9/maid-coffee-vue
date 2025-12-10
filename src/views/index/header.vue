<template>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        text-color="#ff007f"
        :collapse-transition="false"
        :ellipsis="false"
        @select="handleSelect"
    >
        <el-menu-item index="0">
            <router-link to="/">
                <img style="width: 100px" src="" alt="Element logo" />
            </router-link>
        </el-menu-item>
        <el-menu-item index="1">
            <router-link to="/"> 首页 </router-link>
        </el-menu-item>
        <el-sub-menu index="2">
            <template #title> <span>咖啡厅</span></template>
            <router-link to="shop" class="custom-link">
                <el-menu-item index="2-1">咖啡厅介绍</el-menu-item>
            </router-link>
            <el-menu-item index="2-2">热门新店</el-menu-item>
            <el-menu-item index="2-3">店面搜索</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
            <template #title> <span>咖啡</span></template>
            <router-link to="coffee" class="custom-link"
                ><el-menu-item index="3-1">咖啡简介</el-menu-item>
            </router-link>

            <el-menu-item index="3-2">咖啡种类</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="4">
            <router-link to="login">登录</router-link>
        </el-menu-item>
        <el-menu-item index="5" @click="logout">退出登录</el-menu-item>
    </el-menu>
</template>

<script setup name="header">
const logout = () => {
    localStorage.removeItem("code_user");
    location.href = "/login";
};
</script>

<style scoped>
* {
    text-decoration: none;
    font-family: Arial, sans-serif;
}

.el-menu--horizontal > .el-menu-item:nth-child(1) {
    margin-right: auto;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    gap: 10px;
}

.el-menu-item a {
    color: #ff007f;
    font-size: 16px;
    display: inline-block;
    padding: 12px;
    padding-right: 12px;
    padding-left: 12px;
}
</style>
