import {z} from "astro:content"

export const heroSystemSchema = z.object({
    hire: z.string(),
    years: z.string(),
    clients: z.string(),
    projects: z.string(),
    able: z.string(),
})