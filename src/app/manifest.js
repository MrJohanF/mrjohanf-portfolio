export default function manifest() {
  return {
    name: 'Johan Fernández — Portfolio',
    short_name: 'MrJohanF',
    description:
      'Desarrollador Full Stack — Fundador de ConjuntoFácil.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    orientation: 'portrait-primary',
    categories: ['portfolio', 'developer', 'technology'],
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
