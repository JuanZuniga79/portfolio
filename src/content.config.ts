import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import {heroSystemSchema} from "./modules/hero/content/system/schema.ts";
import {heroPersonSchema} from "./modules/hero/content/person/schema.ts";
import skillSystemSchema from "./modules/skills/content/system/schema.ts";
import projectDataSchema from "./modules/project/content/data/schema.ts";

const projectsData = defineCollection({
  loader: glob({pattern: '**/*.mdx', base: "./src/modules/project/content/data"}),
  schema: projectDataSchema
})

const projectsSystem = defineCollection({
  loader: glob({pattern: '**/*.json', base: "./src/modules/project/content/system"}),
})

const heroSystem = defineCollection({
  loader: glob({ pattern: '**/*.json', base: "./src/modules/hero/content/system"}),
  schema: heroSystemSchema,
})

const skillSystem = defineCollection({
  loader: glob({ pattern: '**/*.json', base: "./src/modules/skills/content/system"}),
  schema: skillSystemSchema,
})

const heroPerson = defineCollection({
  loader: glob({ pattern: '**/*.md', base: "./src/modules/hero/content/person"}),
  schema: heroPersonSchema,
})

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


export const collections =
    { services, homeResume, heroPerson, heroSystem, skillSystem, projectsSystem, projectsData };