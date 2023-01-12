// import { createApp } from "vue";
import "./styles/index.scss";
import App from "./App.vue";
import Oruga from "@oruga-ui/oruga-next";
import { bulmaConfig } from "@oruga-ui/theme-bulma";
import { ViteSSG } from "vite-ssg/single-page";

export const createApp = ViteSSG(
  App,
  ({ app }) => {
    app.use(Oruga, bulmaConfig);
  }
);
