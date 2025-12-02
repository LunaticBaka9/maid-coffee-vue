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
                    <router-link to="shopintro" class="custom-link">
                        <el-menu-item index="1-1">咖啡厅介绍</el-menu-item>
                    </router-link>
                    <router-link to="shop" class="custom-link">
                        <el-menu-item index="1-2">热门店面</el-menu-item>
                    </router-link>
                    <router-link to="" class="custom-link">
                        <el-menu-item index="1-3">店面搜索</el-menu-item>
                    </router-link>
                </el-menu-item-group>
                <router-link to="coffee" class="custom-link">
                    <el-menu-item class="card-title-primary">
                        <span class="text">咖啡</span>
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
