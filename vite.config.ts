import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { analyzer } from 'vite-bundle-analyzer';
// import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), analyzer()],    
  resolve: {
   alias: {
      '@images': '/src/assets/images',
      '@styles': '/src/assets/styles',
      '@sections': '/src/sections',
    },

  // alias: {
  //     '@images': path.resolve(__dirname, 'src/assets/images'),
  //     '@styles': path.resolve(__dirname, 'src/assets/styles'),
  //     '@sections': path.resolve(__dirname, 'src/sections'),
  //   },
  },
  css: {
    preprocessorOptions: {
      scss: {
         additionalData: `@use 'sass:color'; @use "@styles/main.scss" as *;`,
      },
    },
  },
})
