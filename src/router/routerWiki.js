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
];

export default routerWiki;
