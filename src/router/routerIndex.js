const routeIndex = [
    {
        path: "/",
        name: "indexWeb",
        component: () => import("../views/index/index.vue"),
    },
    {
        path: "/shop",
        name: "shop",
        component: () => import("../views/index/shop.vue"),
    },
    {
        path: "/shopinfo",
        name: "shopinfo",
        component: () => import("../views/index/shopinfo.vue"),
    },
];

export default routeIndex;
