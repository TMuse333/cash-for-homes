import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.ontariocashforhouses.com/',
      lastModified: new Date('2024-08-10'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url:  'https://www.ontariocashforhouses.com/process',
      lastModified: new Date('2024-08-10'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.focusflowsoftware.com/contact',
      lastModified: new Date('2024-08-10'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.focusflowsoftware.com/online-food-ordering-system',
      lastModified: new Date('2024-08-10'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}