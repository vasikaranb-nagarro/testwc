import { defineConfig } from "vite";

import { svelte } from "@sveltejs/vite-plugin-svelte";

import preprocess from "svelte-preprocess";

export default defineConfig({
  build: {
    lib: {
      entry: "./index.ts",
      name: "SimpleComponent",
    },
  },
  plugins: [
    svelte({
      preprocess: preprocess(),
      emitCss: true,
      compilerOptions: {
        customElement: true,
      },
    }),
  ],
});
