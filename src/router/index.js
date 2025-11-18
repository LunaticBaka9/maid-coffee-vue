import { createRouter, createWebHistory } from "vue-router";

import routeIndex from "./routerIndex"; // 普通文件路由

const router = createRouter({
    history: createWebHistory(),
    routes: [...routeIndex],
});

export default router;
