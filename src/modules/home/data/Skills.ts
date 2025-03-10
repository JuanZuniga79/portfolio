export default interface ISkills {
    name: string;
    level: number;
}

export const frontend: ISkills[] = [
    { name: "next", level: 10 },
    { name: "react", level: 8 },
    { name: "astro", level: 10 },
    { name: "angular", level: 6 },
    { name: "remix", level: 2 },
]

export const backend: ISkills[] = [
    { name: "spring boot", level: 10 },
    { name: "asp.net core", level: 6 },
    { name: "nest", level: 6 },
    { name: "fiber", level: 4 },
]

export const databases: ISkills[] = [
    { name: "postgres", level: 8 },
    { name: "sql server", level: 8 },
    { name: "my sql", level: 6 },
    { name: "mongo", level: 4 },
    { name: "redis", level: 4 },
]

export const languages: ISkills[] = [
    { name: "typescript", level: 10 },
    { name: "javascript", level: 6 },
    { name: "java", level: 8 },
    { name: "csharp", level: 8 },
    { name: "kotlin", level: 6 },
    { name: "python", level: 6 },
]