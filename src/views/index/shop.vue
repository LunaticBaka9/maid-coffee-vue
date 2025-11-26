<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <Header></Header>
            </el-header>
            <el-container>
                <el-aside>
                    <AsideMenu></AsideMenu>
                </el-aside>
                <el-scrollbar>
                    <el-main>
                        <div class="shop-page">
                            <el-container>
                                <el-header>
                                    <div class="header">
                                        <h1>热门新店</h1>
                                    </div>
                                </el-header>

                                <el-main>
                                    <div class="new-shops">
                                        <el-row gutter="20">
                                            <el-col :span="6" v-for="(item, index) in shopList" :key="index">
                                                <el-card shadow="hover">
                                                    <img :src="item.image" alt="店铺图片" class="shop-image" />
                                                    <div class="shop-info">
                                                        <p>{{ item.location }}</p>
                                                        <p>{{ item.name }}</p>
                                                    </div>
                                                </el-card>
                                            </el-col>
                                        </el-row>
                                    </div>
                                </el-main>
                            </el-container>
                        </div>
                    </el-main>
                </el-scrollbar>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
import { reactive } from "vue";
import Header from "./header.vue";
import AsideMenu from "./aside.vue";

const updates = reactive([
    { id: 1, title: "Maid Cafe Sweet Treats", image: "" },
    { id: 2, title: "新しい店舗", image: "" },
    { id: 3, title: "イベント情報", image: "" },
    { id: 4, title: "特典情報", image: "" },
]);

const shopList = reactive([
    {
        id: 32005,
        location: "千葉県",
        name: "不良メイド喫茶・Bar黒月柏店",
        image: "src/assets/img/shop/shop_image_32005_240x240.jpg",
    },
    {
        id: 15242,
        location: "神奈川県",
        name: "不良メイド喫茶・Bar黒月横浜本店",
        image: "src/assets/img/shop/shop_image_15242_240x240.jpg",
    },
    { id: 12522, location: "大阪府", name: "アンネット", image: "src/assets/img/shop/shop_image_12522_240x240.jpg" },
    {
        id: 12431,
        location: "東京都",
        name: "秋葉原☆うさぎと星のコンカフェ LittleStarRabbit",
        image: "src/assets/img/shop/shop_image_12431_240x240.jpg",
    },
    {
        id: 12424,
        location: "東京都",
        name: "プリティデビルメイト",
        image: "src/assets/img/shop/shop_image_12424_240x240.jpg",
    },
    {
        id: 8000,
        location: "東京都",
        name: "アニソン酒場 宝包-PAOPAO-",
        image: "src/assets/img/shop/shop_image_8000_240x240.jpg",
    },
    {
        id: 7823,
        location: "神奈川県",
        name: "アミューズメントポーカー・カジノ VALUE(バリュー)",
        image: "src/assets/img/shop/shop_image_7823_240x240.jpg",
    },
    { id: 7804, location: "東京都", name: "melfi", image: "src/assets/img/shop/shop_image_7804_240x240.jpg" },
    { id: 7795, location: "東京都", name: "がさいれ！", image: "src/assets/img/shop/shop_image_7795_240x240.jpg" },
    { id: 7762, location: "大阪府", name: "cafe&bar Funcy", image: "src/assets/img/shop/shop_image_7762_240x240.jpg" },
    {
        id: 7660,
        location: "大阪府",
        name: "SleepingForest (スリーピングフォレスト)",
        image: "src/assets/img/shop/shop_image_7660_240x240.jpg",
    },
    {
        id: 7400,
        location: "福岡県",
        name: "mirai connect (ミライコネクト)",
        image: "src/assets/img/shop/shop_image_7400_240x240.jpg",
    },
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

.shop-page {
    font-family: Arial, sans-serif;
}

.header {
    text-align: center;
    margin-bottom: 20px;
}

.new-shops {
    margin-top: 20px;
}

.shop-image {
    width: 100%;
    height: auto;
    object-fit: cover;
}

.shop-info {
    text-align: center;
}

.shop-info p {
    margin: 0;
}

.el-col {
    margin-bottom: 20px;
}
.scrollbar-demo-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    margin: 10px;
    text-align: center;
    border-radius: 4px;
    background: var(--el-color-primary-light-9);
    color: var(--el-color-primary);
}
</style>
