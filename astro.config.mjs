// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://christianslw.github.io',
  output: 'static', // Standard für Astro
  base: '/fts/', // WICHTIG: Hier muss der exakte Name deines Repos stehen!
  vite: {
    plugins: [tailwindcss()]
  },
  build: {
    format: 'directory' // sorgt dafür, dass ordnerbasierte HTML-Strukturen erstellt werden
  }
});
