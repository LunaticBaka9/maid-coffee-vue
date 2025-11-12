import { createRouter, createWebHistory } from "vue-router";

import routeIndex from "./routerIndex"; // 普通文件路由

const router = createRouter({
    history: createWebHistory(),
    routes: [...routeIndex],
});

router.beforeEach(async (to, from, next) => {
    document.title = (to.meta.title ? to.meta.title + " - " : "") + import.meta.env.VITE_APP_PROJECT_NAME;
    next();
});

router.afterEach((to) => {
    window.scrollTo(0, 0);
});

export default router;
