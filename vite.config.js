import { defineConfig } from "vite";

export default defineConfig({
  root: "./src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: "./src/index.html",
        project: "./src/project.html",
      },
    },
  },
  resolve: {
    alias: {
      "@scripts": "/scripts",
      "@styles": "/styles",
      "@assets": "/assets",
    },
  },
});
