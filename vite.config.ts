import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // If you renamed your repo to Ericbrmar.github.io, use "/". 
  // If you kept the name ericbrooksmartin.io, use "/ericbrooksmartin.io/"
  base: mode === "production" ? "/" : "/", 

  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // This section ensures your tests don't break the build
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
  },

  build: {
    outDir: "dist",
    emptyOutDir: true,
  }
}));
