import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
	loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		order: z.number(),
		tags: z.array(z.string()),
		role: z.string(),
		highlight: z.object({ value: z.string(), caption: z.string() }),
		link: z.object({ label: z.string(), href: z.string() }).optional(),
	}),
});

export const collections = { work };
