import type IHeaderNav from "../types/IHeaderNav.ts";

const en: IHeaderNav[] = [
    {label: "home", path:"hero"},
    {label: "skills", path:"skills"},
    {label: "projects", path:"projects"},
]
const es: IHeaderNav[] = [
    {label: "inicio", path:"hero"},
    {label: "habilidades", path:"skills"},
    {label: "projects", path:"projects"},
]

export default async function getNavElements(lang: string){
    return lang === "es" ? es : en;
}