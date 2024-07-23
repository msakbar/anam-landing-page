import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  vite: {
    define: {
      'process.env.SENDGRID_API_KEY': JSON.stringify(process.env.SENDGRID_API_KEY),
    },
  },
});