import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {VitePWA} from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA({registerType: 'autoUpdate', manifest: {display: "standalone"}, devOptions: {enabled: true}})
  ],
  server: {
    host: true
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
