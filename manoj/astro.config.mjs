import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'hybrid',
  integrations: [react(), tailwind({ applyBaseStyles: false })],
  adapter: vercel(),
  site: 'https://example.com',
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});
