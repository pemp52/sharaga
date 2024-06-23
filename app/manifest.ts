import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Balenciaga Application',
    short_name: 'Balenciaga App',
    description:
      'Balenciaga магазин одягу, аксесуарiв, концелярiй та сувенiрiв',
    start_url: '/',
    background_color: '#fff',
    theme_color: '#fff',
    display: 'standalone',
    icons: [
      {
        src: '/img/icon.svg',
        sizes: '196x196 512x512 144x144 192x192 128x128 120x120 180x180',
        type: 'image/svg',
        purpose: 'maskable',
      },
      {
        src: '/img/logo.png',
        sizes: '196x196 512x512 144x144 192x192 128x128 120x120 180x180',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
}
