import { type RouteRecordRaw } from "vue-router";

// import { authMiddleware } from "@/app/middleware/auth.middleware";

const routes: RouteRecordRaw[] = [
  {
    name: "LoginView",
    path: "",
    component: () =>
      import("@/app/modules/admin/features/Auth/views/Login.view.vue"),
  },
  {
    name: "AdminLayout",
    path: "/a",
    component: () => import("@/app/modules/admin/layouts/Admin.layout.vue"),
    children: [
      {
        name: "HomeView",
        path: "",
        component: () =>
          import("@/app/modules/admin/features/Home/views/Home.view.vue"),
      },
      {
        name: "UserView",
        path: "usuarios",
        component: () =>
          import("@/app/modules/admin/features/User/views/User.view.vue"),
      },
      {
        name: "SaleView",
        path: "ventas",
        component: () =>
          import("@/app/modules/admin/features/Sale/views/Sale.view.vue"),
      },
      {
        name: "SettingView",
        path: "configuracion",
        component: () =>
          import("@/app/modules/admin/features/Setting/views/Setting.view.vue"),
      },
    ],
  },
];

export default routes;
