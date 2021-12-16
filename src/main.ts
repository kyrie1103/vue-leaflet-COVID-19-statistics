import { createApp } from "vue";
import App from "./App.vue";
import "../node_modules/leaflet/dist/leaflet.css";
import "element-plus/dist/index.css";
import ElementPlus from "element-plus";
import router from "@/router/index";

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.mount("#app");
