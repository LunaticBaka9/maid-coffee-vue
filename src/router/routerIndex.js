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
];

export default routeIndex;
