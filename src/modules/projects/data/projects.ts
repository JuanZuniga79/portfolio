import type IProject from "./types/IProject";
import enp1 from "./en/enp1";
import enp2 from "./en/enp2";
import enp3 from "./en/enp3";

const en: IProject[] = [enp1, enp2, enp3]

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