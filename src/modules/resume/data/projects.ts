// @ts-nocheck
import type IProjectCard from "@resume/types/IProjectCard.ts";
import NotFound from "@core/assets/svg/not-found.svg"

const en: IProjectCard[] = [
    {title: "Coming Soon", description: "More projects Soon", image: NotFound, status: false}
]
const es: IProjectCard[] = [
    {title: "Pronto", description: "Mas Proyectos Pronto", image: NotFound, status: false}
]

export const projects = (lang: string) => lang === 'en' ? en : es;