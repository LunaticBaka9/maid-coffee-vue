const routeManager = [
    {
        path: "/userManager",
        name: "userManager",
        component: () => import("@/views/Manager/UserManager.vue"),
    },
    {
        path: "/shopManager",
        name: "shopManager",
        component: () => import("@/views/Manager/ShopManager.vue"),
    },
];

export default routeManager;
