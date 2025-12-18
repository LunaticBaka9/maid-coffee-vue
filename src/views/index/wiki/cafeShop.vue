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
                                <span class="text">咖啡厅介绍</span>
                            </p>
                        </div>
                    </el-header>
                    <div class="coffee-content">
                        <el-row :gutter="20">
                            <el-col :span="16">
                                <div class="content-text">
                                    <p>
                                        <b>咖啡馆 、 咖啡店</b>或<b>咖啡厅</b>
                                        （ 法语： [kafe] 咖啡馆 ）是一种提供各种咖啡饮品的场所，例如意式浓缩咖啡 、 拿铁
                                        、美式咖啡和卡布奇诺，以及其他饮品。意式咖啡吧是一种专门供应意式浓缩咖啡和意式浓缩咖啡饮品的咖啡馆。
                                        一些咖啡馆除了其他冷饮（例如冰茶）
                                        外，还会供应冰咖啡以及其他不含咖啡因的饮品。咖啡馆也可能供应食物，例如小吃、
                                        三明治 、 松饼 、蛋糕、面包、 糕点或甜甜圈
                                        。在加拿大和美国，许多甜甜圈店都提供咖啡作为甜甜圈的佐餐，因此它们也可以被归类为咖啡馆。不过，与提供更精致糕点和饮品的咖啡馆相比，甜甜圈店往往更休闲，供应价格更低的食品，并且更方便外带和免下车服务，这在这些国家很受欢迎。
                                        在欧洲大陆，一些咖啡馆甚至供应酒精饮料，而在西亚，人们喜欢提供通过水烟壶吸食的调味烟草，这种烟草在大多数阿拉伯语中被称为
                                        shisha ，在黎凡特阿拉伯语 、 希腊语和土耳其语中被称为 nargile 。
                                    </p>
                                    <p>
                                        虽然“ café ”一词可能指咖啡馆，但它也可以指餐馆 、 英式咖啡馆
                                        （也俗​​称“caff”）、“ greasy spoon ”（一种小型廉价餐厅）、 路边咖啡馆 、
                                        茶馆或茶室，或其他休闲餐饮场所。
                                        咖啡馆可能与酒吧或餐厅有一些共同特征，但它与自助餐厅
                                        （一种不提供餐桌服务的食堂式餐厅）不同。咖啡馆的规模从个体经营的小店到大型跨国公司不等
                                        。一些连锁咖啡馆采用特许经营模式 ，在全球多个国家拥有众多分店。
                                    </p>
                                    <p>
                                        从文化角度来看，咖啡馆在很大程度上是社交互动的中心：咖啡馆为顾客提供了一个聚会、交谈、阅读、写作、娱乐或消磨时间的场所，无论是独自一人还是三五成群。咖啡馆可以成为其固定会员的非正式社交俱乐部
                                        。早在 20 世纪 50 年代的垮掉一代时期和 60
                                        年代的民谣音乐时期，咖啡馆就经常举办创作歌手的演出，通常在晚上。数字时代，
                                        网吧的兴起也遵循着类似的原则。
                                    </p>
                                </div>
                                <div class="content-text">
                                    <h2 class="heading">咖啡店形式</h2>
                                    <p>
                                        咖啡馆可能设有户外区域（露台、人行道或人行道咖啡厅），
                                        配有座椅、桌子和阳伞。这在欧洲的咖啡馆尤为明显。咖啡馆提供的公共空间比它们所取代的许多传统酒吧更开放，后者更多是男性主导，注重饮酒。
                                    </p>
                                    <p>
                                        咖啡馆最初作为信息交流和交流场所的用途之一，在 1990 年代通过互联网咖啡厅或
                                        Hotspot 重新引入。现代风格咖啡馆向城市和农村的普及与移动电脑的普及同步进行。
                                        现代风格场所中的电脑和互联网接入，帮助营造出一个年轻、现代的场所，区别于它们所取代的传统酒吧或老式餐馆。
                                    </p>
                                    <h3>亚洲</h3>
                                    <p>
                                        埃及的咖啡馆俗称为 ' ahwah /ʔhwa/ ，这是
                                        قَهْوةqahwah（字面意思为“咖啡”）的方言发音（ 另见阿拉伯语音学#地方变体）。
                                        阿瓦中常见 ' 的还有茶（shāy）和草本茶
                                        ，尤其是非常受欢迎的扶桑花混合茶（埃及阿拉伯语 ：karkadeh 或 ennab）。第一家 '
                                        阿瓦餐厅大约在
                                        1850年代开业，最初主要由年长者光顾，年轻人虽然常来，但并不总是点餐。到 1920
                                        年代，他们与俱乐部（开罗）、 布尔萨 （ 亚历山大）
                                        和乡村旅馆（gharza）有关联。20世纪初， 其中一些成为政治和社会辩论的重要场所。
                                    </p>
                                    <p>
                                        在过去二十年里，印度的咖啡文化得到了扩展。像 Indian Coffee House、Café Coffee
                                        Day、Barista Lavazza
                                        这样的连锁店非常受欢迎。咖啡馆被认为是举办办公室会议和朋友聚会的好场所。
                                    </p>
                                    <p>
                                        在中国，许多新成立的本土连锁咖啡馆为商务人士提供炫耀性消费
                                        ，咖啡价格有时甚至高于西方。
                                    </p>
                                    <p>
                                        在马来西亚和新加坡，传统的早餐和咖啡店被称为 kopi
                                        tiam。这个词是马来语中“咖啡”（借词和变体自英语）和福建方言中“店”（ 店 ;POJ：
                                        tiàm）。菜单通常提供简单的菜肴：以鸡蛋 、
                                        吐司和椰子酱为基础的各种食物，以及咖啡、茶和
                                        Milo，一种在东南亚和澳大拉西亚，尤其是新加坡和马来西亚极受欢迎的麦芽巧克力饮品。
                                    </p>
                                    <p>
                                        在印度尼西亚，传统咖啡馆被称为 kedai kopi、rumah kopi 或 warung kopi，通常缩写为
                                        warkop。Kopi tubruk 是小 warkop 常见饮品。作为咖啡饮品的伴奏，咖啡馆还供应传统的
                                        kue。印度尼西亚第一家咖啡馆于 1878 年在雅加达成立，名为 Warung Tinggi Tek Sun
                                        Ho。
                                    </p>
                                    <p>
                                        在菲律宾，像星巴克这样的连锁咖啡店已成为马卡蒂中央商务区等地区中上层和中产阶级专业人士的热门聚集地。不过，carinderia（小型餐馆）仍然在早餐和小吃的同时供应咖啡。名为“Kapihan”（For
                                        a）的活动常在面包店或餐厅举办，这些餐厅也提供早餐或 merienda
                                        咖啡。还有一些常被称为“咖啡馆”的场所，不仅供应咖啡和糕点，还提供完整的餐食，通常是根据菲律宾口味高度调整的国际美食。
                                    </p>
                                    <p>
                                        在泰国，“café”不仅是国际定义中的咖啡馆，过去还被视为在舞台喜剧表演中提供酒精饮料的夜餐厅
                                        。这类业务蓬勃发展的时期是 1990 年代，1997 年金融危机之前。
                                    </p>
                                    <p>
                                        泰国第一家真正的咖啡馆于 1917 年在拉达那哥欣岛地区的 Si Kak Phraya Si
                                        开业，由当时居住在泰国的美国女性科尔夫人开业。后来，泰国贵族昭披耶拉姆拉科普（เจ้าพระยามราฆพ）在三南苏亚帕（สนามเสือป่า）开设了一家名为“诺拉辛哈咖啡馆”（คาเฟ่นรสิงห์สสนามเสือป่า）的咖啡馆。
                                        皇家广场旁的场地。目前，诺拉辛哈咖啡馆已翻新并迁入帕亚泰宫内。 在南部地区
                                        ，传统的咖啡馆（kopi tiam）深受当地人欢迎，就像马来半岛的许多国家一样。
                                    </p>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup name="shopintro">
import Header from "@/views/components/header.vue";
import AsideMenu from "@/views/components/aside.vue";
import { reactive } from "vue";
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

.coffee-content {
    margin: 0 20px 0 20px;
    background-color: #fff;
}

.heading {
    font-family: "Linux Libertine", "Georgia", "Times", "Source Serif 4", serif;
    line-height: 1;
    font-size: 2rem;
}
.content-text {
    margin-top: 16px;
    margin-left: 1rem;
    font-family: sans-serif;
    color: var(--color-base, #202122);
}
.content-text > p {
    line-height: 2rem;
}
.infobox {
    border-spacing: 3px;
    color: inherit;
    font-size: 88%;
    line-height: 1.5em;
    border: 1px solid #a2a9b1;
    border-spacing: 3px;
    background-color: #f8f9fa;
    color: inherit;
    margin: 0.5em 0 0.5em 1em;
    padding: 0.2em;
    /* float: right; */
    clear: right;
    font-size: 88%;
    line-height: 1.5em;
    width: 22em;
}
.infobox-title {
    font-size: 125%;
    font-weight: bold;
    text-align: center;
}
.infobox-imgae {
    border: 0;
    vertical-align: middle;
    word-wrap: break-word;
    width: 250px;
    height: 188px;
    aspect-ratio: auto 250 / 188;
}
.infobox-caption {
    text-align: center;
}
.infobox > tbody > tr > th {
    text-align: left;
    padding-top: 0.245em;
    line-height: 1.15em;
    padding-right: 0.65em;
    white-space: nowrap;
}
.infobox > tbody > tr > td {
    text-align: left;
    vertical-align: top;
}
.infobox-label {
    padding-left: 0.65em;
    line-height: 1.1em;
    font-weight: normal;
    padding-right: 0.25em;
}
.infobox-full-data {
    text-align: center;
    vertical-align: top;
}
.plainlist {
    text-align: left;
    background: #e0e0e0;
    line-height: 1.25em;
    list-style: none;
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
</style>
