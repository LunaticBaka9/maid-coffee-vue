import { createRouter, createWebHistory } from "vue-router";
import routeIndex from "./routerIndex"; // 普通文件路由
import routeAdmin from "./routerAdmin";
import routeManager from "./routerManager";

const router = createRouter({
    history: createWebHistory(),
    routes: [...routeIndex, ...routeAdmin, ...routeManager],
});

export default router;
