import {
  createRouter,
  createWebHashHistory,
  Router,
  RouteRecordRaw,
} from "vue-router";
import Index from "@/views/index.vue";
import Echarts from "@/views/echarts.vue";
import Ncov from "@/views/ncov.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    component: Index,
  },
  {
    path: "/echarts",
    name: "echarts",
    component: Echarts,
  },
  {
    path: "/ncov",
    name: "ncov",
    component: Ncov,
  },
];

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
