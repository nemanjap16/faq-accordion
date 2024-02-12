/* eslint-disable no-undef */
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@fonts": resolve(__dirname, "./assets/fonts"),
      "@img": resolve(__dirname, "./assets/img"),
    },
  },
});
