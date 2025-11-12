import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    optimizeDeps: {
        include: ["element-plus"],
    },
    server: {
        open: true,
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    build: {
        sourcemap: false,
        outDir: "./web/",
    },
});
