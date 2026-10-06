import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import vercel from '@astrojs/vercel/static';

// Static output: the only server route (the chat proxy) is parked as
// src/pages/api/_chat.ts, and @astrojs/vercel 7 can only emit Node 18
// functions, which Vercel no longer runs.
export default defineConfig({
  integrations: [svelte()],
  output: 'static',
  adapter: vercel(),
});
