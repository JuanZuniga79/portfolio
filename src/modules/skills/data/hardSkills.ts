import type IHardSkill from "./types/IHardSkill";

const getHardSkills = (lang: string) => lang === "en" ? en : es;

const en: IHardSkill[] = [
    {section: "Languages", elements: [
        {name: "java", version: "11+", frequency: "almost every day", from: "08/2020", activity: 8},
        {name: "csharp", version: "10+", frequency: "every other day", from: "08/2021", activity: 7},
        {name: "typescript", version: "4.6+", frequency: "every day", from: "03/2022", activity: 10},
    ]}
]

const es: IHardSkill[] = [

]

export default getHardSkills