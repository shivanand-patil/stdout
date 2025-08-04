// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://stdout.shivoncall.com',
  base: '/',
  outDir: './dist',
  build: {
    assets: '_astro'
  }
});
