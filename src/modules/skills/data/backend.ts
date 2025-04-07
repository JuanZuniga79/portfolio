import dotnet from "../assets/icons/dotnet.svg"
import spring from "../assets/icons/spring.svg"
import nest from "../assets/icons/nest.svg"
import type ISkill from "../types/ISkill.ts";

const backend: ISkill[] = [
    {
        name: "ASP.NET Core", level: 7, experience: 4, lastProject: "current", projects: 10, iconSrc: dotnet.src,
        learning: 4, usage: ["backend", "MVC"],
        certifications: [],
        related: ["Entity Framework", "Swagger", "AutoMapper", "etc"],
    },
    {
        name: "Spring Boot", level: 8, experience: 4, lastProject: "current", projects: 7, iconSrc: spring.src,
        learning: 4, usage: ["backend"], related: ["JPA", "Hibernate", "WebFlux"],
        certifications: [],
    },
    {
        name: "NestJS", level: 7, experience: 3, lastProject: "current", projects: 5, iconSrc: nest.src,
        learning: 4, usage: ["backend"], related: ["Prisma", "class-validator", "jose"],
        certifications: [],
    }
]

export default backend