const routerWiki = [
    {
        path: "/wiki/cafeShop",
        name: "cafeShop",
        component: () => import("../views/index/wiki/cafeShop.vue"),
    },
    {
        path: "/wiki/coffee",
        name: "coffee",
        component: () => import("../views/index/wiki/coffee.vue"),
    },
    {
        path: "/wiki/maidCafe",
        name: "maidCafe",
        component: () => import("../views/index/wiki/maidCofe.vue"),
    },
];

export default routerWiki;
