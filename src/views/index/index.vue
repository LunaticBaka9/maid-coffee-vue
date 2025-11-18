<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <el-menu
                    ellipsis
                    class="el-menu-popper-demo"
                    mode="horizontal"
                    :popper-offset="16"
                    style="max-width: 600px"
                >
                    <el-menu-item index="0">
                        <img style="width: 100px" src="" alt="Element logo" />
                    </el-menu-item>
                    <el-menu-item index="1">
                        <router-link to="/" class="custom-link"> 首页 </router-link>
                    </el-menu-item>
                    <el-sub-menu index="2">
                        <template #title>Workspace</template>
                        <el-menu-item index="2-1">item one</el-menu-item>
                        <el-menu-item index="2-2">item two</el-menu-item>
                        <el-menu-item index="2-3">item three</el-menu-item>
                        <el-sub-menu index="2-4">
                            <template #title>item four</template>
                            <el-menu-item index="2-4-1">item one</el-menu-item>
                            <el-menu-item index="2-4-2">item two</el-menu-item>
                            <el-menu-item index="2-4-3">item three</el-menu-item>
                        </el-sub-menu>
                    </el-sub-menu>
                    <el-menu-item index="3" disabled>Info</el-menu-item>
                    <el-menu-item index="4">Orders</el-menu-item>
                </el-menu>
            </el-header>
            <el-container>
                <el-aside>
                    <el-row>
                        <el-col :span="12">
                            <el-menu default-active="2" class="Aside" @open="handleOpen" @close="handleClose">
                                <router-link to="/" class="custom-link">
                                    <el-menu-item>
                                        <el-icon><location /></el-icon>
                                        <span>首页</span>
                                    </el-menu-item>
                                </router-link>
                                <el-menu-item-group title="">
                                    <router-link to="shop" class="custom-link">
                                        <el-menu-item index="1-1">热门店面</el-menu-item>
                                    </router-link>
                                    <el-menu-item index="1-2">item two</el-menu-item>
                                </el-menu-item-group>
                                <el-sub-menu index="1">
                                    <template #title>
                                        <el-icon><location /></el-icon>
                                        <span>test</span>
                                    </template>
                                    <el-menu-item-group title="Group One">
                                        <el-menu-item index="1-1">item one</el-menu-item>
                                        <el-menu-item index="1-2">item two</el-menu-item>
                                    </el-menu-item-group>
                                    <el-menu-item-group title="Group Two">
                                        <el-menu-item index="1-3">item three</el-menu-item>
                                    </el-menu-item-group>
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
                    </el-row>
                </el-aside>
                <el-main>
                    <RouterView></RouterView>
                    <div class="block text-center">
                        <el-carousel heigt="auto" autoplay style="height: 400px">
                            <el-carousel-item v-for="(image, index) in banders" :key="index" style="height: 500px">
                                <img :src="image" alt="轮播图" class="carousel-image" />
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                    <div>
                        <h1>简介</h1>
                        <h3>
                            <strong>女仆咖啡厅</strong>（日语：メイドカフェ meido kafe；英语：maid
                            café），又称女仆喫茶（メイド喫茶／メイドきっさ meido
                            kissa），为角色扮演系餐厅的一大类型。在女仆咖啡厅内，女服务生会穿着女仆的装束，把顾客视为如同在私人住宅中的主人一般提供服务，而不单是视为普通喫茶店或咖啡店的顾客。第一家正式的女仆咖啡厅“Cure
                            Maid”于2001年3月在日本东京都秋叶原电气街成立。[1][2][3]随后各家女仆咖啡厅开始于日本各处纷纷成立，逐渐形成一种御宅族次文化的流行风潮。[4]
                            尽管女仆咖啡厅最早出现在日本，其风潮也立即扩展至海外，包括中国大陆、韩国、台湾、香港、墨西哥、马来西亚、新加坡、加拿大和美国等地都有女仆咖啡厅的出现
                        </h3>
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup name="index">
import { reactive, ref } from "vue";
import { RouterView } from "vue-router";
import shop from "./shop.vue";

const banders = reactive([
    "src/assets/img/bander/bander1.jpg",
    "src/assets/img/bander/bander2.png",
    "src/assets/img/bander/bander3.webp",
]);
</script>

<style scoped>
.custom-link {
    text-decoration: none;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    gap: 10px;
}

.Aside {
    width: 300px;
}

.el-header {
    margin-bottom: 20px;
}

.main-container {
    display: flex;
}

.footer-content {
    text-align: center;
    padding: 10px;
}

/* 走马灯 */
.carousel-image {
    width: 100%;
    height: 100%;
}

.carousel-item {
    color: #475669;
    opacity: 0.75;
    margin: 0;
    text-align: center;
}

.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    display: flex;
    align-items: center;
    margin: 0;
    text-align: center;
    height: 100%;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>
