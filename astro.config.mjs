// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  output: 'hybrid',
  adapter: vercel(),
  image: {
    service: passthroughImageService()
  }
});