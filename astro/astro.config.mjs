import { defineConfig } from 'astro/config';
import compress from "astro-compress";
import vercelServerless from '@astrojs/vercel/serverless';
// import vercelStatic from '@astrojs/vercel/static';
import sanity from 'astro-sanity';


// https://astro.build/config
export default defineConfig({
  // Ports
  server: command => ({
    port: command === 'dev' ? 6000 : 4000
  }),

  // Plugins
  integrations: [compress(), sanity({
    projectId: 'uh41p3xe',
    dataset: 'production',
    apiVersion: '2023-03-25',
    useCdn: true
  })],
  
  // Vercel
  output: "server",
  adapter: vercelServerless(),

  // output: "static",
  // adapter: vercelStatic(),
});