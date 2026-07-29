import { defineCollection, z } from 'astro:content';

const galleries = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    galleryId: z.string(), // Folder name where images are stored
    slug: z.string(),
    featured: z.boolean().optional().default(false),
    coverImage: z.string(), // Path to cover image
  }),
});

export const collections = { galleries };