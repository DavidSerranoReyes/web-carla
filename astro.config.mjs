// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// Detectar si está en producción por dominio personalizado
const isDomainProduction =
  process.env.NODE_ENV === 'production' && process.env.VERCEL_URL?.includes('carlarreasanchez.com');

export default defineConfig({
  integrations: [react(), sitemap()],
  site: isDomainProduction
    ? 'https://www.carlarreasanchez.com'
    : 'https://davidserranoreyes.github.io',
  base: isDomainProduction ? '/' : '/web-carla',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
