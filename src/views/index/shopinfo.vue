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

                <el-main>
                    <el-header>
                        <div class="header">
                            <p class="card-title-primary">
                                <span class="text">店面介绍</span>
                            </p>
                        </div>
                    </el-header>
                    <div class="card-body">
                        <el-row :gutter="20">
                            <el-col :span="4">
                                <img src="@\assets\img\shop\shop_image_32005_240x240.jpg" class="image" />
                            </el-col>
                            <el-col :span="14">
                                <p class="mb-1">
                                    世界の終末期に不良たちが集う酒場！ゴシックなメイドがお給仕する柏のコンカフェ！
                                </p>
                                <p class="mb-1">カフェ BAR</p>
                                <h1><a class="shop-name" href="#">不良メイド喫茶・Bar黒月柏店</a></h1>
                            </el-col>
                            <el-col :span="6" class="col-3">
                                <p class="text-center">
                                    <a class="font-weight-bold" style="font-size: 22px">TEL：04-7110-3155</a>
                                </p>
                                <p class="text-center">お気軽にお問わせくださいませ♪</p>
                                <p class="text-center">
                                    <el-button type="warning" style="width: 100%">拨打电话</el-button>
                                </p>
                            </el-col>
                        </el-row>
                        <el-divider border-style="dashed" class="divider" />
                        <el-row :gutter="20">
                            <el-col :span="14">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th><span class="label-pill mb-2">预计消费</span></th>
                                            <td>90 RMB~</td>
                                        </tr>
                                        <tr>
                                            <th><span class="label-pill mb-2">营业时间</span></th>
                                            <td>周二〜周四 19点〜23点/周五・周六 19点〜4点30分</td>
                                        </tr>
                                        <tr>
                                            <th><span class="label-pill mb-2">营业日</span></th>
                                            <td>
                                                <table class="date-table">
                                                    <tbody>
                                                        <tr>
                                                            <th>一</th>
                                                            <th>二</th>
                                                            <th>三</th>
                                                            <th>四</th>
                                                            <th>五</th>
                                                            <th>六</th>
                                                            <th>日</th>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-center">−</td>
                                                            <td class="text-center">−</td>
                                                            <td class="text-center">○</td>
                                                            <td class="text-center">○</td>
                                                            <td class="text-center">○</td>
                                                            <td class="text-center">○</td>
                                                            <td class="text-center">○</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </el-col>
                            <el-col :span="12">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th><span class="label-pill mb-2">地址</span></th>
                                            <td>千葉県柏市柏3丁目6-16 磯野ビル4F</td>
                                        </tr>
                                        <tr>
                                            <th><span class="label-pill mb-2">最近的地铁</span></th>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </el-col>
                            <el-col>
                                <p><el-button>人员招募</el-button></p>
                                <P><el-button>收藏本店</el-button></P>
                            </el-col>
                        </el-row>
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup name="shopinfo">
import Header from "./header.vue";
import AsideMenu from "./aside.vue";
</script>

<style scoped>
.el-main {
    padding: 0;
}

.image {
    height: auto;
    display: block;
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    max-width: 100%;
}

.text-center {
    text-align: center !important;
}

.divider {
    margin: 14px 0;
    border-bottom: 4px dotted #ffccff;
    width: 100%;
}

.label-pill {
    width: 100px;
    background-color: #00bfae;
    border: 2px solid #00bfae;
    text-align: center;
    display: inline-block;
    margin-right: 4px;
    color: #fff;
    font-weight: 700;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    opacity: 0.8;
    line-height: 1.5;
}

.date-table {
    background: #fff;
    border: 1px solid #dee2e6;
    width: 100%;
    border-collapse: collapse;
}

.date-table th {
    padding: 2px 4px;
    background: #ffe9ef;
    font-weight: 700;
    color: #d6336c;
    text-align: center;
    white-space: nowrap !important;
}

.mb-1 {
    margin-bottom: 0.25rem !important;
}

.mb-2 {
    margin-bottom: 0.5rem !important;
}

a {
    color: #ff64b1;
    text-decoration: none;
}

p {
    margin-top: 0;
    margin-bottom: 1rem;
}

.card-body {
    margin-top: 0;
    padding: 20px;
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
