import type IHeaderNav from "../types/IHeaderNav.ts";

const en: IHeaderNav[] = [
    {label: "home", path:"hero"},
    {label: "resume", path:"projects"},
    {label: "skills", path:"skills"},
]
const es: IHeaderNav[] = [
    {label: "inicio", path:"hero"},
    {label: "resumen", path:"projects"},
    {label: "habilidades", path:"skills"},
]

export default async function getNavElements(lang: string){
    return lang === "es" ? es : en;
}