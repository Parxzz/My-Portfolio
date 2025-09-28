
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Reduce build complexity
    minify: false,
    sourcemap: false,
    // Reduce chunk size to prevent memory issues
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Simplify chunking
        manualChunks: undefined
      }
    }
  },
  // Optimize dependencies
  optimizeDeps: {
    // Reduce esbuild usage
    disabled: false,
    include: ['react', 'react-dom']
  },
  // Reduce server complexity
  server: {
  host: "localhost", // or true to listen on all network interfaces
  port: 5173,        // default Vite port
  open: true,        // auto-open browser when dev server starts
  hmr: {
    overlay: false
  }
},

  // Simplify esbuild configuration
  esbuild: {
    // Reduce esbuild worker threads
    target: 'es2015',
  }
})
