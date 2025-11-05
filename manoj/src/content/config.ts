import { defineCollection, z } from 'astro:content';

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(), // YYYY-MM-DD
    location: z.string().optional(),
    link: z.string().url().optional(),
    summary: z.string().optional(),
  })
});

const updates = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(), // YYYY-MM-DD
    link: z.string().url().optional(),
    summary: z.string().optional(),
  })
});

export const collections = { events, updates };
