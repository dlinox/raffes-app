import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "@/core/ui/plugins/vuetify";
import routers from "@/app/routes/index.routes.ts";
// import requiredLabelDirective from "@/core/directives/requiredLabel.directive";
// import AppCopyright from "@/core/iu/components/AppCopyright.vue";
import LnxDataTable from "@/core/ui/components/LnxDataTable/DataTable.vue";
import "@/style.css";

const app = createApp(App);

app.use(routers);

// app.component("AppCopyright", AppCopyright);
// app.directive("required-label", requiredLabelDirective);
app.component("LnxDataTable", LnxDataTable);
app.use(vuetify);

app.mount("#app");
