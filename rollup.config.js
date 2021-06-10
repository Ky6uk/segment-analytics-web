import { defineConfig } from 'rollup'
import rollupTypescript from '@rollup/plugin-typescript';


export default defineConfig({
  input: 'src/analytics.ts',

  output: {
    name: 'segment',
    dir: 'dist',
    format: 'umd',
    sourcemap: true
  },

  plugins: [
    rollupTypescript()
  ]
});
