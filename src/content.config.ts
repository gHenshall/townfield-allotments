import { defineCollection, z } from 'astro:content';

const newsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    featured: z.boolean().default(false),
    emoji: z.string(),
    excerpt: z.string(),
  }),
});

export const collections = {
  news: newsCollection,
};