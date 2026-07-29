import { defineCollection, z } from 'astro:content';

const galleries = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    featured: z.boolean().optional().default(false),
    coverImage: z.string(),
    images: z.array(
      z.object({
        url: z.string(),
        caption: z.string().optional(),
      })
    ),
  }),
});

export const collections = { galleries };