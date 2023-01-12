import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~/": `${resolve(__dirname, "src")}/`,
      "~bulma": "node_modules/bulma",
      "~@oruga-ui": "node_modules/@oruga-ui",
    },
  },
  plugins: [vue()],
});
