import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    featuredImage: z.string(),
    author: z.string(),
    date: z.coerce.date(),
    category: z.enum([
      'Aviation Insights',
      'Industry News',
      'Company Updates',
      'Technology',
    ]),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = { blog };
