import {z} from "astro:content";


const skillSystemSchema = z.object({
    title: z.string(),
    subtitle: z.string(),
    trainee: z.string(),
    beginner: z.string(),
    intermediate: z.string(),
    advanced: z.string(),
    expert: z.string(),
    preference: z.string(),
    loveIt: z.string(),
    years: z.string(),
    current: z.string(),
    last: z.string(),
    projects: z.string(),
    frequency: z.string(),
    related: z.string(),
    certifications: z.string(),
    learning: z.string(),
    experience: z.string(),
})

export default skillSystemSchema;