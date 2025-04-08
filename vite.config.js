import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: true,
    // lib: {
    //   entry: path.resolve(__dirname, 'src/index.ts'),
    //   name: 'GamifyUiKit',
    //   fileName: (format) => `gamify-ui-kit.${format}.js`,
    // },
    // rollupOptions: {
    //   external: ['react', 'react-dom'],
    //   output: {
    //     globals: {
    //       react: 'React',
    //       'react-dom': 'ReactDOM',
    //     },
    //   },
    // },
  }
})