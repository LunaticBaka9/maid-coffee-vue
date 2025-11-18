import index from "../views/index/index.vue";
import shop from "../views/index/shop.vue";

const routeIndex = [
    {
        path: "/",
        name: "index",
        component: index,
    },
    {
        path: "/shop",
        name: "shop",
        component: shop,
    },
];

export default routeIndex;
