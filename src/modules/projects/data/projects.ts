import type IProject from "./types/IProject";
import enp1 from "./en/enp1";

const en: IProject[] = [enp1]

const es: IProject[] = []

export const getProjects = (lang: string) => lang === "en" ? en : es;
export const getProject = (lang: string, project: string) => {
    let prj: IProject;
    if(lang === "en"){
        prj = en.find((value) => value.name === project)!;
    }else{
        prj = es.find((value)=> value.name === project)!;
    }
    return prj;
}