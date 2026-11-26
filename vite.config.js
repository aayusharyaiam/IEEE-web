import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { organizationJsonLd } from './src/data/seo.js'

// Inject the Organization structured data from the shared SEO config.
const jsonLd = () => ({
  name: 'inject-jsonld',
  transformIndexHtml: (html) => html.replace('__ORG_JSONLD__', JSON.stringify(organizationJsonLd)),
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), jsonLd()],
})
