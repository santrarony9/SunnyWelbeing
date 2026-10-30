import { MetadataRoute } from 'next';
import { SERVICES, ARTICLES } from '@/data/business';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sunnywelbeing.in';

  const staticRoutes = [
    '',
    '/about',
    '/approach',
    '/services',
    '/team',
    '/faq',
    '/contact',
    '/resources',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const serviceRoutes = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const articleRoutes = ARTICLES.map((article) => ({
    url: `${baseUrl}/resources/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...articleRoutes];
}
