import { defineClientConfig } from "@vuepress/client";
// 引入 element ui plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import 'element-plus/theme-chalk/display.css'
import "element-plus/theme-chalk/dark/css-vars.css";

import DarkModeSwitch from "./components/DarkModeSwitch.vue";
import UvLabelView from "./components/UvLabelView.vue";
import UvLinkView from "./components/UvLinkView.vue";

export default defineClientConfig({
  enhance({ app }) {
    app.use(ElementPlus);
    app.component("DarkModeSwitch", DarkModeSwitch);
    app.component("uv-label-view", UvLabelView);
    app.component("uv-link-view", UvLinkView);
  },
});
