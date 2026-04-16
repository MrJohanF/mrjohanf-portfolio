const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mrjohanf.dev'

export default function sitemap() {
  const lastModified = new Date()
  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          es: siteUrl,
          en: siteUrl,
        },
      },
    },
  ]
}
