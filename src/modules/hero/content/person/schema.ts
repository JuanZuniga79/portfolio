import {z} from "astro:content";

export const heroPersonSchema = z.object({
    position: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    description: z.string(),
})