import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mrjohanf.dev'
const authorName = 'Johan Fernández'
const siteName = `${authorName} — Portfolio`

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${authorName} · Full Stack Developer`,
    template: `%s · ${authorName}`,
  },
  description:
    'Desarrollador Full Stack especializado en crear experiencias digitales excepcionales. Fundador de ConjuntoFácil, SaaS de gestión de propiedad horizontal en Colombia.',
  applicationName: siteName,
  authors: [{ name: authorName, url: siteUrl }],
  creator: authorName,
  publisher: authorName,
  keywords: [
    'Johan Fernández',
    'MrJohanF',
    'Full Stack Developer',
    'Desarrollador Full Stack',
    'React',
    'Next.js',
    'Node.js',
    'Java',
    '.Net',
    'Portfolio',
    'Colombia',
    'ConjuntoFácil',
    'SaaS',
    'PropTech',
  ],
  alternates: {
    canonical: '/',
    languages: {
      'es-CO': '/',
      'en-US': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    alternateLocale: ['en_US'],
    url: siteUrl,
    siteName,
    title: `${authorName} · Full Stack Developer`,
    description:
      'Desarrollador Full Stack con más de 5 años creando aplicaciones modernas. Fundador de ConjuntoFácil, SaaS para propiedad horizontal en Colombia.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${authorName} — Full Stack Developer`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${authorName} · Full Stack Developer`,
    description:
      'Desarrollador Full Stack. Fundador de ConjuntoFácil, SaaS de propiedad horizontal en Colombia.',
    images: ['/og-image.png'],
    creator: '@mrjohanf',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  manifest: '/manifest.webmanifest',
  category: 'technology',
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
}

export const viewport = {
  themeColor: '#000000',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={inter.variable} suppressHydrationWarning>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  )
}
