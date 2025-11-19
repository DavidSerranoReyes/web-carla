// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// Detectar si está en Vercel
const isVercel = process.env.VERCEL === '1';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), sitemap()],
  site: isVercel 
    ? 'https://www.carlarreasanchez.com'
    : 'https://davidserranoreyes.github.io',
  base: isVercel ? '/' : '/web-carla',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
