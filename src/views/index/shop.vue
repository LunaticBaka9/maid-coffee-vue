<template>
    <div class="shop-page">
        <el-container>
            <el-header>
                <div class="header">
                    <h1>メイドカフェでGO!</h1>
                    <el-menu mode="horizontal" class="top-menu">
                        <el-menu-item index="1">お店検索</el-menu-item>
                        <el-menu-item index="2">最新情報</el-menu-item>
                        <el-menu-item index="3">特典</el-menu-item>
                        <el-menu-item index="4">ギャラリー</el-menu-item>
                        <el-menu-item index="5">バイト</el-menu-item>
                        <el-menu-item index="6">ユーザー</el-menu-item>
                        <el-menu-item index="7">お店</el-menu-item>
                    </el-menu>
                </div>
            </el-header>

            <el-main>
                <el-row>
                    <el-aside width="200px">
                        <el-scrollbar>
                            <el-menu :default-openeds="['1', '3']">
                                <el-sub-menu index="1">
                                    <template #title>
                                        <el-icon><message /></el-icon>Navigator One
                                    </template>
                                    <el-menu-item-group>
                                        <template #title>Group 1</template>
                                        <el-menu-item index="1-1">Option 1</el-menu-item>
                                        <el-menu-item index="1-2">Option 2</el-menu-item>
                                    </el-menu-item-group>
                                    <el-menu-item-group title="Group 2">
                                        <el-menu-item index="1-3">Option 3</el-menu-item>
                                    </el-menu-item-group>
                                    <el-sub-menu index="1-4">
                                        <template #title>Option4</template>
                                        <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
                                    </el-sub-menu>
                                </el-sub-menu>
                                <el-sub-menu index="2">
                                    <template #title>
                                        <el-icon><icon-menu /></el-icon>Navigator Two
                                    </template>
                                    <el-menu-item-group>
                                        <template #title>Group 1</template>
                                        <el-menu-item index="2-1">Option 1</el-menu-item>
                                        <el-menu-item index="2-2">Option 2</el-menu-item>
                                    </el-menu-item-group>
                                    <el-menu-item-group title="Group 2">
                                        <el-menu-item index="2-3">Option 3</el-menu-item>
                                    </el-menu-item-group>
                                    <el-sub-menu index="2-4">
                                        <template #title>Option 4</template>
                                        <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
                                    </el-sub-menu>
                                </el-sub-menu>
                                <el-sub-menu index="3">
                                    <template #title>
                                        <el-icon><setting /></el-icon>Navigator Three
                                    </template>
                                    <el-menu-item-group>
                                        <template #title>Group 1</template>
                                        <el-menu-item index="3-1">Option 1</el-menu-item>
                                        <el-menu-item index="3-2">Option 2</el-menu-item>
                                    </el-menu-item-group>
                                    <el-menu-item-group title="Group 2">
                                        <el-menu-item index="3-3">Option 3</el-menu-item>
                                    </el-menu-item-group>
                                    <el-sub-menu index="3-4">
                                        <template #title>Option 4</template>
                                        <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
                                    </el-sub-menu>
                                </el-sub-menu>
                            </el-menu>
                        </el-scrollbar>
                    </el-aside>

                    <el-col :span="18">
                        <el-card class="main-content">
                            <div class="search-bar">
                                <el-button type="primary">すべて</el-button>
                                <el-button>詳細検索</el-button>
                                <el-button>新規店舗</el-button>
                                <el-button>みんなのお気に入り</el-button>
                                <el-button>駅から検索</el-button>
                                <el-button>地図から検索</el-button>
                            </div>

                            <div class="featured">
                                <h2>お店検索</h2>
                                <img src="" alt="お店検索" class="featured-image" />
                            </div>

                            <div class="latest-updates">
                                <h3>最新更新</h3>
                                <el-row>
                                    <el-col :span="6" v-for="update in updates" :key="update.id">
                                        <el-card>
                                            <img :src="update.image" alt="更新内容" class="update-image" />
                                            <p>{{ update.title }}</p>
                                        </el-card>
                                    </el-col>
                                </el-row>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>

<script setup>
import { reactive } from "vue";

const updates = reactive([
    { id: 1, title: "Maid Cafe Sweet Treats", image: "" },
    { id: 2, title: "新しい店舗", image: "" },
    { id: 3, title: "イベント情報", image: "" },
    { id: 4, title: "特典情報", image: "" },
]);
</script>

<style scoped>
.shop-page {
    font-family: Arial, sans-serif;
}

.header {
    text-align: center;
    padding: 10px;
}

.top-menu {
    margin-top: 10px;
    font-size: 14px;
}

.sidebar {
    padding: 10px;
}

.search-bar {
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
}

.featured {
    text-align: center;
    margin: 20px 0;
}

.featured-image {
    width: 100%;
    height: auto;
}

.latest-updates {
    margin-top: 20px;
}

.update-image {
    width: 100%;
    height: auto;
}
</style>
