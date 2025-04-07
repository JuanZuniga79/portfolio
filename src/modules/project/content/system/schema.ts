import {z} from 'astro:content'

const projectSystemSchema = z.object({
    title: z.string(),
    subtitle: z.string(),
    completed: z.string(),
    inProgress: z.string(),
    readMore: z.string(),
    repository: z.string(),
    live: z.string(),
})

export default projectSystemSchema