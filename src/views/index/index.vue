<template>
    <div>
        <el-header>
            <div class="header-content">
                <img src="" alt="WIKI" class="logo" />
                <el-menu mode="horizontal" class="el-menu">
                    <el-sub-menu index="1">
                        <template #title>导航</template>
                        <el-menu-item index="1-1">首页</el-menu-item>
                        <el-menu-item index="2-2">咖啡厅</el-menu-item>
                        <el-menu-item index="2-3">咖啡</el-menu-item>
                        <el-sub-menu index="2-4">
                            <template #title>讨论版</template>
                            <el-menu-item index="2-4-1">item one</el-menu-item>
                            <el-menu-item index="2-4-2">item two</el-menu-item>
                            <el-menu-item index="2-4-3">item three</el-menu-item>
                        </el-sub-menu>
                    </el-sub-menu>
                    <el-sub-menu index="2">
                        <template #title>帮助</template>
                        <el-menu-item index="2-1">帮助</el-menu-item>
                        <el-menu-item index="2-2">item two</el-menu-item>
                        <el-menu-item index="2-3">item three</el-menu-item>
                        <el-sub-menu index="2-4">
                            <template #title>item four</template>
                            <el-menu-item index="2-4-1">item one</el-menu-item>
                            <el-menu-item index="2-4-2">item two</el-menu-item>
                            <el-menu-item index="2-4-3">item three</el-menu-item>
                        </el-sub-menu>
                    </el-sub-menu>
                </el-menu>
                <el-input placeholder="搜索萌娘百科" class="search-bar" />
                <div><el-button type="primary" :icon="Search">Search</el-button></div>
            </div>
        </el-header>

        <el-container class="main-container">
            <el-main class="content">
                <el-carousel trigger="click" height="400px">
                    <el-carousel-item v-for="(image, index) in carouselImages" :key="index">
                        <img :src="image" alt="轮播图" class="carousel-image" />
                    </el-carousel-item>
                </el-carousel>

                <div>
                    <el-card class="topics-card">
                        <h3>咖啡厅专题</h3>
                        <el-tabs>
                            <el-tab-pane label="推荐">
                                <el-row>
                                    <el-col :span="6" v-for="topic in topics" :key="topic.id">
                                        <el-card>
                                            <img :src="topic.image" :alt="topic.title" class="topic-image" />
                                            <p>{{ topic.title }}</p>
                                        </el-card>
                                    </el-col>
                                </el-row>
                            </el-tab-pane>
                            <el-tab-pane label="动画">
                                <p>动画内容</p>
                            </el-tab-pane>
                            <el-tab-pane label="漫画">
                                <p>漫画内容</p>
                            </el-tab-pane>
                            <el-tab-pane label="游戏">
                                <p>游戏内容</p>
                            </el-tab-pane>
                            <el-tab-pane label="小说">
                                <p>小说内容</p>
                            </el-tab-pane>
                        </el-tabs>
                    </el-card>
                </div>
            </el-main>
        </el-container>

        <el-footer>
            <div class="footer-content">
                <p>萌娘百科 - 开启你的ACGN之旅</p>
            </div>
        </el-footer>
    </div>
</template>

<script setup>
import { reactive } from "vue";

const carouselImages = reactive(["src/assets/img/carouselImages/common_header_lg.jpg", "", ""]);
</script>

<style scoped>
.main-container {
    font-family: Arial, sans-serif;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    gap: 10px;
}

.logo {
    height: 40px;
}

.el-menu {
    flex-grow: 1;
    font-size: 12px;
    padding: 0;
}

.search-bar {
    width: 250px;
}

.carousel-image {
    width: 100%;
    object-fit: cover;
}

.banner {
    width: 100%;
    height: auto;
}

.topics-card {
    margin-top: 20px;
}

.topic-image {
    width: 100%;
    height: auto;
}

.footer-content {
    text-align: center;
    padding: 10px;
}
</style>
