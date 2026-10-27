import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/reptrack/',
  plugins: [
    VitePWA({
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'sw.js',
      registerType: 'autoUpdate',
      includeAssets: ['pwa-icon.svg'],
      injectManifest: {
        globPatterns: ['**/*.{js,css,html,ico,svg,woff2}'],
        globIgnores: ['**/graphify/**'],
      },
      manifest: {
        name: 'MD RepTrack',
        short_name: 'RepTrack',
        description: 'Minimalist workout tracking',
        theme_color: '#000000',
        background_color: '#000000',
        display: 'standalone',
        scope: '/reptrack/',
        start_url: '/reptrack/',
        icons: [
          {
            src: 'pwa-icon.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'any',
          },
        ],
      },
      devOptions: {
        enabled: false,
      },
    }),
  ],
});
