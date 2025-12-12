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
                        <div class="card-header">
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
                                    <el-button type="warning" style="width: 100%" class="btn">拨打电话</el-button>
                                </p>
                            </el-col>
                        </el-row>
                        <el-divider border-style="dashed" class="divider" />
                        <el-row :gutter="20">
                            <el-col :span="8">
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
                            <el-col :span="10">
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
                            <el-col :span="6">
                                <div class="text-center">
                                    <p><el-button class="btn btn-primary">人员招募</el-button></p>
                                    <P><el-button class="btn btn-primary">收藏本店</el-button></P>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="tab-container">
                        <el-tabs v-model="activeName" type="card" stretch="top" style="background-color: white">
                            <el-tab-pane label="店铺详情" name="first">
                                <div>
                                    <el-carousel style="height: 800px; margin-top: 10px" :autoplay="false">
                                        <el-carousel-item
                                            v-for="(image, index) in shopImg"
                                            :key="index"
                                            style="height: auto; width: 100%"
                                        >
                                            <img :src="image" />
                                        </el-carousel-item>
                                    </el-carousel>
                                    <div class="table-bordered">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th width="130">讲究</th>
                                                    <td>
                                                        <ul>
                                                            <li class="md-5">
                                                                <span class="label label-primary">其一</span>
                                                                可以制作手工啤酒的咖啡厅（con cofe）
                                                            </li>
                                                            <li class="md-5">
                                                                <span class="label label-primary">其二</span>
                                                                既能唱卡拉ok又能做DJ ! ！
                                                            </li>
                                                            <li class="md-5">
                                                                <span class="label label-primary">其三</span>
                                                                充满涂鸦艺术的网络空间
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th width="130">简介</th>
                                                    <td>
                                                        世界末日不良们聚集的酒馆！哥特式女仆服务的柏咖啡厅！<br />
                                                        每年由女仆煮大麦制作的原创手工啤酒大受欢迎！这里提供各种美味和有趣的美食，包括禁止的CBD啤酒！还可以品尝女仆亲手做的料理哦！
                                                        让人联想到世界末日的涂鸦艺术和真实赛博朋克风格的异空间值得一看！<br />
                                                        只充电1100日元<br />
                                                        时间无限制/卡拉OK唱到饱/有原创鸡尾酒特典/卡拉OK点播OK<br />
                                                        从JR柏站东口步行5分钟（从上野乘坐电车直通约30分钟）
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th width="130">种类</th>
                                                    <td>咖啡厅BAR （con cafe）</td>
                                                </tr>
                                                <tr>
                                                    <th width="130">预计消费</th>
                                                    <td>90 RMB~</td>
                                                </tr>
                                                <tr>
                                                    <th width="130">菜单</th>
                                                    <td>
                                                        充电1,100日元<br />
                                                        时间无限制/卡拉ok无限畅唱<br />
                                                        饮料700日元起，食物600日元起可以订购。<br />
                                                        没有任何额外费用！请每小时至少订购1个订单！可以进行切奇摄影，但这是原创鸡尾酒的特典，详情请咨询演员。
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th width="130">推荐菜单</th>
                                                    <td>
                                                        女仆手工制作！黑月咖喱1200日元<br />
                                                        女仆手工制作！黑月爱秘永麦酒1300日元<br />
                                                        超级优质！农场制作的冰淇淋900日元<br />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th width="130">电话号码</th>
                                                    <td>04-7110-3155</td>
                                                </tr>
                                                <tr>
                                                    <th width="130">营业时间</th>
                                                    <td>周二〜周四 19点〜23点/周五・周六 19点〜4点30分</td>
                                                </tr>
                                                <tr>
                                                    <th width="130">营业日</th>
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
                                                <tr>
                                                    <th width="130">详细分类</th>
                                                    <td>
                                                        面向女性 / 面向男性 / 团体OK / 商品销售 / 酒精 / 可刷卡 / 活动日
                                                        / 每日菜单 / 可预约 / 可包场 / 原创制服 / 可吸烟 / 优惠券 / 热闹
                                                        / 深夜营业 / 大提琴 / 现场演出 / 电源 / 卡拉ok /
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th width="130">地址</th>
                                                    <td>千葉県柏市柏3丁目6-16 磯野ビル4F</td>
                                                </tr>
                                                <tr>
                                                    <th width="130">官网</th>
                                                    <td>
                                                        <a href="https://lit.link/kurotsukikswd">
                                                            https://lit.link/kurotsukikswd
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th width="130">twitter</th>
                                                    <td>
                                                        <a href="https://twitter.com/https:x.comkurotsuki_kswd">
                                                            https://twitter.com/https:x.comkurotsuki_kswd
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th width="130">facebook</th>
                                                    <td>
                                                        <a href="https://www.facebook.com/kurotsukikswd">
                                                            https://www.facebook.com/kurotsukikswd
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th width="130">开店日</th>
                                                    <td>2023年9月29日</td>
                                                </tr>
                                                <tr>
                                                    <th width="130">采访</th>
                                                    <td>接受媒体采访！</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="最新资讯" name="second">Config</el-tab-pane>
                            <el-tab-pane label="店面图片" name="third">Role</el-tab-pane>
                            <el-tab-pane label="其他" name="fourth">Task</el-tab-pane>
                        </el-tabs>
                    </div>
                    <br /><br /><br /><br />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup name="shopinfo">
import Header from "./header.vue";
import AsideMenu from "./aside.vue";
import { reactive, ref } from "vue";

const activeName = ref("first");

const shopImg = reactive([
    "src/assets/img/shopTitleImage/shop_titleimage1_32005_1240.jpg",
    "src/assets/img/shopTitleImage/shop_titleimage2_32005_1240.jpg",
    "src/assets/img/shopTitleImage/shop_titleimage3_32005_1240.jpg",
]);
</script>

<style scoped>
.el-main {
    padding: 0;
}

a:hover {
    text-decoration: underline;
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
    text-align: center;
}

.shop-name {
    font-size: 24px;
}

.divider {
    margin: 14px 0;
    border-bottom: 4px dotted #ffccff;
    width: 100%;
}

.card-header {
    margin-top: 20px;
}

.card-body {
    margin: 0 20px 0 20px;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0 0 14px 14px;
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
    height: 30px;
    font-size: 16px;
}

.btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    border: 1px solid transparent;
    border-radius: 2px;
    height: 42px;
}

.btn-primary {
    color: #fff;
    background-color: #ff64b1;
    border-color: #ff5aac;
    transition-property: all;
    width: 100%;
}

.tab-container {
    margin: 20px 20px 0 20px;
    padding: 0px;
    border: 1px solid rgba(0, 0, 0, 0.125);
    background-color: #fff;
}

.table-bordered {
    margin-top: 20px;
    border: 1px solid rgba(0, 0, 0, 0.125);
}

.table-bordered th {
    background: #ffe9ef;
    padding: 10px;
    font-weight: 700;
    color: #d6336c;
    text-align: center;
    white-space: nowrap !important;
    vertical-align: middle !important;
}

.table-bordered td {
    word-break: break-all;
    vertical-align: middle !important;
    padding: 0.5rem;
}

.table-bordered ul {
    list-style: none;
    padding: 0px;
}

.label {
    padding: 0.2em 0.6em 0.3em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25em;
    display: inline-block;
    white-space: normal;
    font-weight: 400;
}

.label-primary {
    background-color: #ff64b1;
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

.md-5 {
    margin-bottom: 5px !important;
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
