// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// Detectar el entorno
const isVercel = process.env.VERCEL === '1';
const isDomainProduction =
  process.env.NODE_ENV === 'production' && process.env.VERCEL_URL?.includes('carlarreasanchez.com');

export default defineConfig({
  integrations: [react(), sitemap()],
  site: 'https://www.carlarreasanchez.com',
  base: '/',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
