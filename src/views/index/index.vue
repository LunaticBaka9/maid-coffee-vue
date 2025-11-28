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
                <el-scrollbar>
                    <el-main>
                        <div class="block text-center">
                            <el-carousel height="auto" autoplay style="height: 400px">
                                <el-carousel-item v-for="(image, index) in banders" :key="index" style="height: 500px">
                                    <img :src="image" alt="轮播图" class="carousel-image" />
                                </el-carousel-item>
                            </el-carousel>
                        </div>
                        <div>
                            <h1>网页简介</h1>
                            <h3>
                                <strong>女仆咖啡厅</strong>（日语：メイドカフェ meido kafe；英语：maid
                                café），又称女仆喫茶（メイド喫茶／メイドきっさ meido
                                kissa），为角色扮演系餐厅的一大类型。在女仆咖啡厅内，女服务生会穿着女仆的装束，把顾客视为如同在私人住宅中的主人一般提供服务，而不单是视为普通喫茶店或咖啡店的顾客。第一家正式的女仆咖啡厅“Cure
                                Maid”于2001年3月在日本东京都秋叶原电气街成立。[1][2][3]随后各家女仆咖啡厅开始于日本各处纷纷成立，逐渐形成一种御宅族次文化的流行风潮。[4]
                                尽管女仆咖啡厅最早出现在日本，其风潮也立即扩展至海外，包括中国大陆、韩国、台湾、香港、墨西哥、马来西亚、新加坡、加拿大和美国等地都有女仆咖啡厅的出现
                            </h3>
                        </div>
                    </el-main>
                </el-scrollbar>
            </el-container>
        </el-container>
    </div>
</template>

<script setup name="index">
import { reactive, ref } from "vue";
import Header from "./header.vue";
import AsideMenu from "./aside.vue";

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

.el-container {
    height: calc(100vh - 1rem);
    font-family: Arial, sans-serif;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    gap: 10px;
}

.header {
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
