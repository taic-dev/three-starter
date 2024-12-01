// vite.config.js
import { defineConfig } from 'vite'
import { glslify } from "vite-plugin-glslify";
import gltf from 'vite-plugin-gltf';

export default defineConfig({
  root: "src",
  plugins: [
    glslify(),
    gltf({ include: ["**/*.gltf", '**/*.glb'] }),
  ],
  build: {
    outDir: './dist',
    emptyOutDir: true,
    assetsInclude: ['*.gltf', '*.glb'],
  },
})