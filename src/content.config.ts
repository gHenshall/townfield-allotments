import { defineCollection, z } from 'astro:content';

const galleries = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    galleryId: z.string(),
    slug: z.string(),
    collectionId: z.string().optional(), // Which collection this gallery belongs to
    featured: z.boolean().optional().default(false),
    coverImage: z.string(),
  }),
});

const collections = defineCollection({
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections_export = { galleries, collections };