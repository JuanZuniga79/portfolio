import {z} from "astro:content"

const projectDataSchema = z.object({
    title: z.string(),
    date: z.string(),
    done: z.boolean(),
    type: z.string(),
    short_description: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    repository: z.optional(z.string()),
    live: z.optional(z.string()),
    coverUrl: z.optional(z.string()),
})

export default projectDataSchema