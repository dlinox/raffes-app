import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

// import { authMiddleware } from "@/app/middleware/auth.middleware";

const routes: RouteRecordRaw[] = [];

const routers = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_PATH),
  routes,
});

export default routers;
