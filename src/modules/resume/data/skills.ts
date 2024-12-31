const languages: string[] = [
    "Java 17+", "Kotlin 2+", "Typescript", "Python 3.10+", "C# 12+"
];

const frontend: string[] = [
    "React 18 & 19", "Angular 18 & 19", "Astro 4 & 5", "Nextjs 14 & 15", "SocketIO", "GraphQL", "AstroDB",
    "TailwindCSS", "Styled Components", "ShadCN"
]

const backend: string[] = [
    "Java Spring Boot 3", "Kotlin Spring Boot 3", "Nestjs 10", "FastAPI", "ASP.NET Core 6/8/9"
]

export const skillsList: string[] = [
    "language", "frontend", "backend"
]

export const skills:(lang: string)=> string[] =(skill: string)=> {
    switch (skill) {
        case "language":
            return languages;
        case "frontend":
            return frontend;
        case "backend":
            return backend;
    }
    return []
}