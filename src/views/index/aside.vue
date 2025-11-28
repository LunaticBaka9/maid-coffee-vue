<template>
    <el-scrollbar height="100vh">
        <el-col>
            <el-menu @open="handleOpen" @close="handleClose">
                <router-link to="/" class="custom-link">
                    <el-menu-item class="card-title-primary">
                        <span class="text">首页</span>
                    </el-menu-item>
                </router-link>
                <el-menu-item-group title="">
                    <router-link to="shop" class="custom-link">
                        <el-menu-item index="1-1">热门店面</el-menu-item>
                    </router-link>
                    <router-link to="" class="custom-link">
                        <el-menu-item index="1-2">店面搜索</el-menu-item>
                    </router-link>
                </el-menu-item-group>
                <router-link to="" class="custom-link">
                    <el-menu-item class="card-title-primary">
                        <span class="text">咖啡介绍</span>
                    </el-menu-item>
                </router-link>
                <el-menu-item-group title="">
                    <router-link to="shop" class="custom-link">
                        <el-menu-item index="2-1">咖啡种类</el-menu-item>
                    </router-link>
                    <router-link to="" class="custom-link">
                        <el-menu-item index="2-2">咖啡</el-menu-item>
                    </router-link>
                </el-menu-item-group>
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon><location /></el-icon>
                        <span>test</span>
                    </template>
                    <el-sub-menu index="1-4">
                        <template #title>item four</template>
                        <el-menu-item index="1-4-1">item one</el-menu-item>
                    </el-sub-menu>
                </el-sub-menu>
                <el-menu-item index="2">
                    <el-icon><icon-menu /></el-icon>
                    <span>Navigator Two</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                    <el-icon><document /></el-icon>
                    <span>Navigator Three</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <el-icon><setting /></el-icon>
                    <span>Navigator Four</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-scrollbar>
</template>
<script setup></script>
<style scoped>
.el-scrollbar {
    font-family: Arial, sans-serif;
}

.custom-link {
    text-decoration: none;
}

.card-title-primary {
    background-color: #ff69b4;
    margin: 0;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    padding: 10px 15px;
    border-radius: 10px 10px 0 0;
    background-image: linear-gradient(
        135deg,
        #ffb6c1 25%,
        #ff69b4 25%,
        #ff69b4 50%,
        #ffb6c1 50%,
        #ffb6c1 75%,
        #ff69b4 75%,
        #ff69b4
    );
    background-size: 14px 14px;
}

.card-title-primary .text {
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}
</style>
