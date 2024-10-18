import {z,defineCollection} from "astro:content";

const profile = defineCollection({
    type: "content",
    schema: z.object({
        name: z.string(),
        job: z.string(),
        address: z.string(),
        email: z.string(),
    })
})

const experience = defineCollection({
    type: "content",
    schema: z.object({
        date: z.string(),
        job: z.string(),
        business: z.string(),
        businessUrl: z.string(),
        type: z.string(),
        tech: z.array(z.string()),
    })
})

const education = defineCollection({
    type: "content",
    schema: z.object({
        institute: z.string(),
        instituteUrl: z.string(),
        program: z.string(),
        type: z.string(),
        date: z.string(),
    })
})

const courses = defineCollection({
    type: "content",
    schema: z.object({
        platform: z.string(),
        course: z.string(),
        courseUrl: z.string(),
        duration: z.number(),
        date: z.string(),
    })
})

export const collections = {
    'profile': profile,
    'experience': experience,
    'education': education,
    'courses': courses
}