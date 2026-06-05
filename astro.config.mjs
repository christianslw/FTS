// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://christianslw.github.io',
  output: 'static', // Standard für Astro
  vite: {
    plugins: [tailwindcss()]
  }
});
