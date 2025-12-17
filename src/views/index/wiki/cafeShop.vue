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
                                <span class="text">咖啡简介</span>
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
                                    <h2 class="heading">历史</h2>
                                    <h3>奥斯曼帝国</h3>
                                    <p>
                                        最早的咖啡馆出现在大马士革 。这些奥斯曼咖啡馆也于 15 世纪出现在阿拉伯半岛的麦加
                                        ，随后在 16 世纪传播到奥斯曼帝国的首都伊斯坦布尔和巴格达
                                        。咖啡馆成为人们喜爱的聚会场所，人们聚集在这里喝咖啡、聊天、玩棋类游戏（如国际象棋和西洋双陆棋）
                                        、听故事和音乐，以及讨论新闻和政治。由于其吸引的顾客群体以及自由坦诚的讨论氛围，咖啡馆也被称为“智慧的殿堂”。
                                    </p>

                                    <p>
                                        麦加的咖啡馆引起了伊玛目的担忧，他们认为咖啡馆是政治集会和饮酒的场所，因此在
                                        1512 年至 1524 年间颁布了禁令 。
                                        然而，由于咖啡已深深融入阿拉伯人和邻近民族的日常生活和文化，这些禁令最终未能维持。
                                        奥斯曼编年史家易卜拉欣·佩切维在其著作（1642-1649
                                        年）中记载了伊斯坦布尔第一家咖啡馆（ kiva han ）的开业：直到公元 962 年（1555
                                        年），在神圣的君士坦丁堡以及奥斯曼帝国的广大地区，咖啡和咖啡馆都不存在。大约在那一年，一个名叫哈卡姆的阿勒颇人和一个名叫沙姆斯的大马士革人来到这座城市；他们在塔赫塔卡莱区各自开了一家大店，开始出售咖啡。
                                    </p>
                                    <p>
                                        在16世纪时在伊斯坦布尔、开罗和麦加便有了咖啡馆。17世纪第一家咖啡馆在欧洲开张。通过在17世纪引进咖啡，咖啡馆在17世纪第一次在欧洲流行起来。英国的第一家土耳其咖啡馆由一个名叫Jacob或Jacobs的土耳其犹太人在1650年的牛津开办。而伦敦的第一家咖啡馆于2年后在Cornhill的St.
                                        Michael's Alley开张。
                                    </p>
                                    <h3>波斯</h3>
                                    <p>
                                        17 世纪法国旅行家兼作家让·夏尔丹对波斯咖啡馆（ 波斯语 ： qahveh khaneh
                                        ）的景象进行了生动的描述：人们在此交谈，因为新闻在此传播，那些关心政治的人可以自由无畏地批评政府，因为政府根本不理会人民的声音。人们还会玩一些无伤大雅的游戏，比如跳棋
                                        、跳房子和国际象棋。此外，毛拉 、
                                        苦行僧和诗人轮流用诗歌或散文讲述故事。毛拉和苦行僧的叙述如同我们的布道，都是道德教诲，但人们不听也不被视为失礼。没有人会因此被迫放弃游戏或谈话。毛拉会站在卡赫韦哈内（qahveh-khaneh，一种犹太教仪式场所）的中央或一端，高声布道；苦行僧也会突然出现，斥责众人世俗的虚妄和物质的匮乏。经常会有两三个人同时说话，一个人在一边，另一个人在对面，有时一个人是传道者，另一个人是讲故事的人。
                                    </p>
                                    <h3>欧洲</h3>
                                    <p>
                                        17
                                        世纪，咖啡首次出现在奥斯曼帝国以外的欧洲，咖啡馆也随之出现，并迅速流行起来。据说第一家咖啡馆于
                                        1632 年在意大利利沃诺由一位犹太商人创立，或者稍晚一些，于 1640
                                        年在威尼斯出现。在 19 世纪和 20 世纪的欧洲，咖啡馆常常是作家和艺术家们的聚会场所
                                    </p>
                                    <h3>奥地利</h3>
                                    <p>
                                        关于维也纳咖啡馆起源的传统说法始于 1683
                                        年维也纳战役中土耳其人战败后遗留下的神秘绿豆袋。所有这些咖啡豆都被赐予了胜利的波兰国王扬三世·索别斯基
                                        ，索别斯基又将它们转赠给了他的一位军官—— 耶日·弗朗齐歇克·库尔奇茨基
                                        ，一位拥有鲁塞尼亚血统的乌克兰哥萨克和波兰外交官。传说中，库尔奇茨基用这批咖啡豆在维也纳开设了第一家咖啡馆，并且是第一个在咖啡中加入牛奶的人。如今，在一条以库尔奇茨基命名的街道上，矗立着他的雕像。
                                    </p>
                                    <p>
                                        然而，现在普遍认为维也纳第一家咖啡馆实际上是由一位名叫约翰内斯·迪奥达托（Johannes
                                        Diodato，又名约翰内斯·西奥达特 Johannes Theodat）的亚美尼亚商人开设的。他于 1685
                                        年在维也纳开设了一家注册咖啡馆。
                                        十五年后，又有四位亚美尼亚人拥有了自己的咖啡馆。18 世纪下半叶，
                                        饮用咖啡的文化在亚美尼亚已经十分盛行。
                                    </p>
                                    <p>
                                        随着时间的推移，
                                        哈布斯堡统治下的维也纳逐渐形成了一种独特的咖啡馆文化。一方面，作家、艺术家、音乐家、知识分子、享乐主义者及其赞助人聚集在咖啡馆；另一方面，咖啡馆里不断供应各种新奇的咖啡。在咖啡馆里，人们打牌、下棋、工作、阅读、思考、创作、讨论、争论、观察，或者只是闲聊。咖啡馆也是获取信息的重要场所，因为所有顾客都可以免费阅读本地和外国报纸。这种咖啡馆文化在
                                        19 世纪传播到整个哈布斯堡帝国 。
                                    </p>
                                    <p>
                                        在整个中欧，维也纳咖啡馆都是科学理论、政治计划乃至艺术项目的酝酿和讨论之地。詹姆斯·
                                        乔伊斯甚至曾在的里雅斯特 ——
                                        当时乃至现在都是意大利和中欧主要的咖啡及咖啡加工港口——的一家维也纳咖啡馆里享用咖啡。维也纳卡普齐纳咖啡正是从那里发展成为如今举世闻名的卡布奇诺
                                        。哈布斯堡咖啡馆这种独特的多元文化氛围在后来的纳粹主义和共产主义时期遭到了严重破坏，如今只能在少数几个早已融入历史长河的地方找到，例如维也纳和的里雅斯特。
                                    </p>
                                    <h3>英格兰</h3>
                                    <p>
                                        英国第一家咖啡馆于 1650 年至 1651 年 在牛津高街开业，店主是“犹太人雅各布”。1654
                                        年，街对面又开了一家咖啡馆，与“犹太人西尔克斯·乔布森”（ 皇后巷咖啡馆
                                        ）展开竞争。在伦敦 ，最早的咖啡馆由帕斯夸·罗塞于 1652 年创立 。
                                        安东尼·伍德在其著作《生活与时代 》（1674年）
                                        中评论牛津的咖啡馆时写道：“学习的衰落，以及由此导致的学术的衰落，都源于咖啡馆，大多数学者都聚集在那里，花费大量时间听闻和谈论各种消息。”
                                        咖啡馆的老板是帕斯夸·罗塞，他是奥斯曼帝国商人丹尼尔·爱德华兹的仆人，爱德华兹进口咖啡并协助罗塞在那里开设了这家咖啡馆。
                                    </p>
                                    <p>
                                        从 1670 年到 1685
                                        年，伦敦咖啡馆的数量开始增加，并因其作为辩论场所的受欢迎程度而开始具有政治意义。
                                        英国咖啡馆是重要的聚会场所，尤其是在伦敦。到 1675 年，英格兰已有超过 3000
                                        家咖啡馆。
                                        咖啡馆是重要的社会平等场所，向所有男性开放，不分社会地位，因此与平等和共和主义联系在一起。进入咖啡馆即可获得书籍或印刷新闻。咖啡馆促进了印刷新闻文化的普及，并推动了包括保险、股票和拍卖在内的各种金融市场的发展。
                                        伦敦劳合社起源于爱德华·劳埃德经营的一家咖啡馆
                                        ，船舶保险承销商在那里会面洽谈业务。早期伦敦咖啡馆浓厚的学术氛围向所有支付有时只需一便士入场费的人开放，因此它们也被称为
                                        “便士大学”
                                    </p>

                                    <h2 class="heading">各地演变</h2>
                                    <b>台湾</b>
                                    <p>
                                        近年来，咖啡店除了是大家放松、享受甜点的好去处之外，更是许多人喜欢的工作地点，因此常见许多学生一起讨论作业，或是一些自由工作者于店内一隅工作。会有这样的改变，和台湾咖啡店的装潢及营运模式的变迁有关，咖啡店变得不仅是“店面”的样子，随着经营者的理念与喜好各有很大的差异，而某些店面的营业时间也从原本的限制时段变成不限时，如此让咖啡店变成台湾人不管在放松或是工作，都能享受小确幸的好地方。
                                    </p>
                                    <b>日本</b>
                                    <p>
                                        20世纪初期曾出现具风俗店性质的珈琲店（カフェー），也出现在日治时期的台湾，例如台北太平町的维特咖啡（Café
                                        Werther）。
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
