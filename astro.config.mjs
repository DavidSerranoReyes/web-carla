// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: 'https://davidserranoreyes.github.io',
  base: '/web-carla',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});