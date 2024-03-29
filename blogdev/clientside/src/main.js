import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "../src/assets/style.css";
import "../src/assets/form.css";

const app = createApp(App);
app.use(router);
app.mount("#app");
