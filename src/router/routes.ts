import Route from "@/constants/route";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: Route.HOME,
    component: () => import("../views/home-page.vue"),
  },
  {
    path: "/todo",
    name: Route.TODO,
    component: () => import("../views/todo-page.vue"),
  },
];

export default routes;
