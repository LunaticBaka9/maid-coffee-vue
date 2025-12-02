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
        path: "/shopintro",
        name: "shopintro",
        component: () => import("../views/index/shopintro.vue"),
    },
    {
        path: "/shopinfo",
        name: "shopinfo",
        component: () => import("../views/index/shopinfo.vue"),
    },
    {
        path: "/coffee",
        name: "coffee",
        component: () => import("../views/index/coffee.vue"),
    },
];

export default routeIndex;
