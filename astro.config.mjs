import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  vite: {
    plugins: [
      {
        name: 'svg-loader',
        enforce: 'pre',
        transform(code, id) {
          if (id.endsWith('.svg')) {
            return `export default ${JSON.stringify(code)}`;
          }
        },
      },
    ],
    define: {
      'process.env.SENDGRID_API_KEY': JSON.stringify(process.env.SENDGRID_API_KEY),
    },
  },
});