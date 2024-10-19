import type IHardSkill from "./types/IHardSkill";

const getHardSkills = (lang: string) => lang === "en" ? en : es;

const en: IHardSkill[] = [
    {section: "Languages", elements: [
        {name: "Java", version: "11+", frequency: "almost every day", from: "08/2020", activity: 8},
    ]}
]

const es: IHardSkill[] = [

]

export default getHardSkills