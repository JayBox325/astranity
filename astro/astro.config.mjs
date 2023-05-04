import { defineConfig } from 'astro/config';
// import compress from "astro-compress";
import vercelServerless from '@astrojs/vercel/serverless';
import vercelStatic from '@astrojs/vercel/static';
import sanity from 'astro-sanity';

// Environment variables
import { loadEnv } from "vite"
const { PUBLIC_SANITY_PROJECT_ID } = loadEnv(import.meta.env.PUBLIC_SANITY_PROJECT_ID, process.cwd(), "")
const { PUBLIC_SANITY_DATASET } = loadEnv(import.meta.env.PUBLIC_SANITY_DATASET, process.cwd(), "")
const { PUBLIC_SANITY_API_VERSION } = loadEnv(import.meta.env.PUBLIC_SANITY_API_VERSION, process.cwd(), "")
const { PUBLIC_ASTRO_OUTPUT } = loadEnv(import.meta.env.PUBLIC_ASTRO_OUTPUT, process.cwd(), "")

export default defineConfig({

  // Ports
  server: command => ({
    port: command === 'dev' ? 6000 : 4000
  }),

  // Plugins
  integrations: [
    // compress(),
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      apiVersion: PUBLIC_SANITY_API_VERSION,
      useCdn: true
    })
  ],
  
  // Vercel
  output: PUBLIC_ASTRO_OUTPUT, ...(PUBLIC_ASTRO_OUTPUT === "server" && {adapter: vercelServerless()})
})