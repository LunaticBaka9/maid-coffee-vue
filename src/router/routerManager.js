const routeManager = [
    {
        path: "/adminManager",
        name: "adminManager",
        component: () => import("@/views/Manager/AdminManager.vue"),
    },
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
