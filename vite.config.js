import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
<<<<<<< HEAD
  server: {
    port: 5173
  }
=======
>>>>>>> 7e3eb3ee3f3ee147be5e7ccac56531f820c645b5
})
