<template>
    <div class="shop-page">
        <el-container>
            <el-header>
                <div class="header">
                    <h1>新规萌店</h1>
                </div>
            </el-header>

            <el-main>
                <div class="new-shops">
                    <el-row gutter="20">
                        <el-col :span="6" v-for="shop in shops" :key="shop.id">
                            <el-card>
                                <img :src="shop.image" alt="店铺图片" class="shop-image" />
                                <div class="shop-info">
                                    <p>{{ shop.location }}</p>
                                    <p>{{ shop.name }}</p>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script setup name="shop">
import { reactive } from "vue";

const updates = reactive([
    { id: 1, title: "Maid Cafe Sweet Treats", image: "" },
    { id: 2, title: "新しい店舗", image: "" },
    { id: 3, title: "イベント情報", image: "" },
    { id: 4, title: "特典情報", image: "" },
]);

const shops = reactive([
    { id: 1, location: "千葉県", name: "不良メイド喫茶・Bar黒月柏店", image: "" },
    { id: 2, location: "神奈川県", name: "不良メイド喫茶・Bar黒月横浜本店", image: "" },
    { id: 3, location: "大阪府", name: "アンネット", image: "" },
    { id: 4, location: "東京都", name: "秋葉原☆うさぎと星のコンカフェ LittleStarRabbit", image: "" },
    { id: 5, location: "東京都", name: "プリティデビルメイト", image: "" },
    { id: 6, location: "東京都", name: "アニソン酒場 宝包-PAOPAO-", image: "" },
    { id: 7, location: "神奈川県", name: "アミューズメントポーカー・カジノ VALUE(バリュー)", image: "" },
    { id: 8, location: "東京都", name: "melfi", image: "" },
    { id: 9, location: "東京都", name: "がさいれ！", image: "" },
    { id: 10, location: "大阪府", name: "cafe&bar Funcy", image: "" },
    { id: 11, location: "大阪府", name: "SleepingForest (スリーピングフォレスト)", image: "" },
    { id: 12, location: "福岡県", name: "mirai connect (ミライコネクト)", image: "" },
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
    margin-top: 10px;
}
</style>
