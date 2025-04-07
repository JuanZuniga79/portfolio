import type ISkill from "../types/ISkill.ts";
import react from "../assets/icons/react.svg"
import next from "../assets/icons/next.svg"
import astro from "../assets/icons/astro.svg"
import angular from "../assets/icons/angular.svg"
import blazor  from "../assets/icons/blazor.svg"

const frontend: ISkill[] = [
    {
        name: "React", experience: 4, lastProject: "current", learning: 5, level: 8, projects: 8, iconSrc: react.src,
        usage: ["Frontend", "Mobile"],
        related: ["Redux", "Tailwind", "Zustand", "Axios", "Shad/cn"],
        certifications: []
    },
    {
        name: "Next", experience: 4, lastProject: "current", learning: 4, level: 7, projects: 6, iconSrc: next.src,
        usage: ["Frontend", "FullStack", "PWA"],
        related: ["Redux", "Tailwind", "Zustand", "Axios", "Shad/cn"],
        certifications: []
    },
    {
        name: "Astro", experience: 2, lastProject: "current", learning: 2, level: 7, projects: 5, iconSrc: astro.src,
        usage: ["Frontend"],
        related: ["Nano Store", "React", "Shad/cn", "Tailwind"],
        certifications: []
    },
    {
        name: "Angular", experience: 4, lastProject: "2025", learning: 4.5, level: 7, projects: 4, iconSrc: angular.src,
        usage: ["Frontend"],
        related: ["Tailwind", "PrimeNG", "PrimeFlex"],
        certifications: []
    },
    {
        name: "Blazor", experience: 0, lastProject: "2024", learning: 3, level: 5, projects: 2, iconSrc: blazor.src,
        usage: ["Frontend", "FullStack"],
        related: ["Tailwind"],
        certifications: []
    }
]

export default frontend;