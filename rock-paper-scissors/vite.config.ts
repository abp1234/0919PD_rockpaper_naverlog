import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {VitePWA} from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType:'autoUpdate',
      devOptions:{
        enabled:true
      },
      manifest: {
        name: 'Rock Paper Scissors',
        short_name: 'RPS',
        description: 'A Rock Paper Scissors game',
        theme_color: '#ffffff', // 원하는 색상으로 설정
      },
      workbox: {
        globDirectory: 'public/',
        globPatterns: ['**/*.{js,css,html}'],
        swDest: 'public/sw.js', // 수정된 경로
      },
    })as any,
  ],
})
