import { defineConfig, squooshImageService } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react({
    include: ['**/react/*']
  })],
  image: {
    service: squooshImageService(),
    domains: ['astro.build', 'https://raw.githubusercontent.com/']
  },
  output: 'server',
  adapter: vercel()
});