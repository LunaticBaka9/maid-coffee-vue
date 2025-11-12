const routeIndex = [
    {
        path: "/",
        name: "indexWeb",
        meta: { title: "首页", requiresAuth: false },
        component: () => import("../views/index/index.vue"),
    },
    {
        path: "/shop",
        name: "shop",
        meta: { title: "登录", requiresAuth: false },
        component: () => import("../views/index/shop.vue"),
    },
];

export default routeIndex;
