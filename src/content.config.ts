import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const services = defineCollection({
  loader: glob({ pattern: `**/*.mdx`, base: "./src/modules/home/content/services" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  })
});

const homeResume = defineCollection({
  loader: glob({ pattern: `**/*.md`, base: "./src/modules/home/content/resume" }),
  schema: z.object({
    title: z.string(),
  }),
});


const projects = defineCollection({
  loader: glob({ pattern: `**/*.md`, base: "./src/modules/home/content/projects" }),
  schema: z.object({
    name: z.string(),
    category: z.string(),
    type: z.string(),
    skills: z.array(z.string()),
    repo: z.string(),
    cover: z.string(),
    live: z.string(),
    qualification: z.number(),
  })
})


export const collections = { services, homeResume, projects };