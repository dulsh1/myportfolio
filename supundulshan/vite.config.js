import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.mp4', '**/*.MP4', '**/*.JPG'],
  server: {
    hmr: {
      overlay: true, // keep overlay, can set to false if desired
    }
  }
})
