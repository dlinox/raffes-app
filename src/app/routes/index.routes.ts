import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

// import { authMiddleware } from "@/app/middleware/auth.middleware";
import AdminRoutes from "@/app/modules/admin/routes/admin.routes";

const routes: RouteRecordRaw[] = [...AdminRoutes];

const routers = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_PATH),
  routes,
});

export default routers;
