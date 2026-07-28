import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    image: z.string(),
    featured: z.boolean().optional().default(false),
  }),
});

const galleries = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    coverImage: z.string(),
    images: z.array(z.string()),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = { news, galleries };