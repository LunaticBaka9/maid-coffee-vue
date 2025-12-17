<template>
    <div class="common-layout" style="overflow: hidden">
        <el-container>
            <el-header height="4rem" class="header">
                <Header></Header>
            </el-header>
            <el-container>
                <el-aside width="12rem">
                    <AsideMenu></AsideMenu>
                </el-aside>

                <el-main>
                    <el-header>
                        <div class="header">
                            <p class="card-title-primary">
                                <span class="text">热门店面</span>
                            </p>
                        </div>
                    </el-header>
                    <el-row :gutter="30" class="shop-cards">
                        <el-col :span="4" v-for="(item, index) in data.tableData" :key="index">
                            <el-card shadow="hover" @click="navTo('/shopinfo?shopId=' + item.shopId)">
                                <img :src="item.coverPath" alt="店铺图片" class="shop-image" />
                                <div class="shop-info">
                                    <div>{{ item.location }}</div>
                                    <div class="text-info">{{ item.shopName }}</div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                    <el-row :gutter="30" class="shop-cards">
                        <el-col :span="4" v-for="(item, index) in shopList" :key="index">
                            <router-link to="shopinfo">
                                <el-card shadow="hover">
                                    <img :src="item.image" alt="店铺图片" class="shop-image" />
                                    <div class="shop-info">
                                        <div>{{ item.location }}</div>
                                        <div class="text-info">{{ item.name }}</div>
                                    </div>
                                </el-card>
                            </router-link>
                        </el-col>
                    </el-row>
                    <br /><br /><br />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import Header from "@/views/components/header.vue";
import AsideMenu from "@/views/components/aside.vue";
import request from "../../../utils/request";

const data = reactive({
    tableData: [],
});

const navTo = (url) => {
    location.href = url;
};

const load = () => {
    request.get("shop/selectAllShops").then((res) => {
        if (res.code === "200") {
            console.log(res.data);
            data.tableData = res.data;
        } else {
            ElMessage.error(res.msg);
        }
    });
};
load();

const shopList = reactive([
    {
        id: 32005,
        location: "千葉県",
        name: "不良メイド喫茶・Bar黒月柏店",
        image: "api/img/shop/shop_image_32005_240x240.jpg",
    },
    {
        id: 15242,
        location: "神奈川県",
        name: "不良メイド喫茶・Bar黒月横浜本店",
        image: "http://localhost:8081/img/shop/shop_image_15242_240x240.jpg",
    },
    {
        id: 12522,
        location: "大阪府",
        name: "アンネット",
        image: "http://localhost:8081/img/shop/shop_image_12522_240x240.jpg",
    },
    {
        id: 12431,
        location: "東京都",
        name: "秋葉原☆うさぎと星のコンカフェ LittleStarRabbit",
        image: "http://localhost:8081/img/shop/shop_image_12431_240x240.jpg",
    },
    {
        id: 12424,
        location: "東京都",
        name: "プリティデビルメイト",
        image: "http://localhost:8081/img/shop/shop_image_12424_240x240.jpg",
    },
    {
        id: 8000,
        location: "東京都",
        name: "アニソン酒場 宝包-PAOPAO-",
        image: "http://localhost:8081/img/shop/shop_image_8000_240x240.jpg",
    },
    {
        id: 7823,
        location: "神奈川県",
        name: "アミューズメントポーカー・カジノ VALUE(バリュー)",
        image: "http://localhost:8081/img/shop/shop_image_7823_240x240.jpg",
    },
    {
        id: 7804,
        location: "東京都",
        name: "melfi",
        image: "http://localhost:8081/img/shop/shop_image_7804_240x240.jpg",
    },
    {
        id: 7795,
        location: "東京都",
        name: "がさいれ！",
        image: "http://localhost:8081/img/shop/shop_image_7795_240x240.jpg",
    },
    {
        id: 7762,
        location: "大阪府",
        name: "cafe&bar Funcy",
        image: "http://localhost:8081/img/shop/shop_image_7762_240x240.jpg",
    },
    {
        id: 7660,
        location: "大阪府",
        name: "SleepingForest (スリーピングフォレスト)",
        image: "http://localhost:8081/img/shop/shop_image_7660_240x240.jpg",
    },
    {
        id: 7400,
        location: "福岡県",
        name: "mirai connect (ミライコネクト)",
        image: "http://localhost:8081/img/shop/shop_image_7400_240x240.jpg",
    },
    {
        id: 7400,
        location: "福岡県",
        name: "mirai connect (ミライコネクト)",
        image: "http://localhost:8081/img/shop/shop_image_7400_240x240.jpg",
    },
    {
        id: 7400,
        location: "福岡県",
        name: "mirai connect (ミライコネクト)",
        image: "http://localhost:8081/img/shop/shop_image_7400_240x240.jpg",
    },
]);
</script>

<style scoped>
* {
    text-decoration: none;
    font-family: Arial, sans-serif;
}

.custom-link {
    text-decoration: none;
}

.shop-cards {
    padding: 20px;
    border-radius: 7px;
    overflow: hidden;
}

.main-container {
    display: flex;
}

.footer-content {
    text-align: center;
    padding: 10px;
}

/* 标题背景样式 */
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

/* 商店卡片 */
.el-card {
    --el-card-padding: 5px;
    max-width: 300px;
}

.shop-image {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    max-width: 100%;
}

.shop-info {
    flex: 1 1 auto;
}

.shop-info div {
    font-size: 0.85rem;
    margin-top: 1rem;
    margin-bottom: 20px;
    line-height: 1;
    color: #6c757d;
    font-weight: 400;
}

.text-info {
    display: block;
    height: 2.8em;
    line-height: 1.4;
    overflow: hidden;
    word-break: break-all;
    font-size: 0.85rem;
    color: #17a2b8;
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
