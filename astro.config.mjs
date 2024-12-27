// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

import tailwind from '@astrojs/tailwind';

import solidJs from '@astrojs/solid-js';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover"
  },
  devToolbar: {
    enabled: false
  },
  base: ".",
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: {
      redirectToDefaultLocale: true,
      prefixDefaultLocale: true,
      fallbackType: "redirect",
      strategy: "pathname"
    },
  },
  experimental: {
    svg: true,
    clientPrerender: true
  },
  adapter: vercel(),
  integrations: [tailwind(), react()]
});