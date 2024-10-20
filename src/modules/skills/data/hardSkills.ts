import type IHardSkill from "./types/IHardSkill";

const getHardSkills = (lang: string) => lang === "en" ? en : es;

const en: IHardSkill[] = [
    {section: "Languages", elements: [
        {name: "java", version: "11+", frequency: "almost every day", from: "08/2020", activity: 8},
        {name: "csharp", version: "10+", frequency: "every other day", from: "08/2021", activity: 7},
        {name: "typescript", version: "4.6+", frequency: "every day", from: "03/2022", activity: 10},
        {name: "python", version: "3.9+", frequency: "only when necessary", from: "08/2019", activity: 4},
        {name: "sql", version: "", frequency: "almost every day", from: "08/2021", activity: 9}
    ]},
    {section: "I'm learning", elements:[
        {name: "c", version: "11", frequency: "16 hours per week", from: "03/2024", activity: 6},
        {name: "kotlin", version: "2.0+", frequency: "almost every day", from: "08/2024", activity: 9},
        {name: "rust", version: "1.8+", frequency: "8 hours per week", from: "08/2024", activity: 3},
        {name: "go", version: "1.23+", frequency: "20 hours per week", from: "04/2024", activity:7}
    ]},
    {section: "Runtimes", elements:[
        {name: "node", version: "18+", frequency: "only when necessary", from: "03/2020", activity: 5},
        {name: "deno", version: "", frequency: "used a bit", from: "02/2024", activity: 3},
        {name: "bunjs", version: "1+", frequency: "almost every day", from: "05/2024", activity: 8}
    ]},
    {section: "Frontend", elements: [
        {name: "react", version: "18+", frequency: "only when necessary", from: "01/2021", activity: 7},
        {name: "nextjs", version: "13+", frequency: "preferred choice", from: "01/2023", activity: 8},
        {name: "astrojs", version: "4+", frequency: "almost every day", from: "01/2024", activity: 9},
    ]},
    {section: "Backend", elements:[
        {name: "spring-boot", version: "3+", frequency: "almost every day", from: "03/2021", activity: 9},
        {name: "asp.net-core", version: "6+", frequency: "every other day", from: "08/2021", activity:8},
        {name: "nest", version: "9+", frequency: "only when necessary", from: "11/2022", activity: 5},
        {name: "fast-api", version: "0.7+", frequency: "only when necessary", from: "04/2022", activity: 6}
    ]},
    {section: "Databases", elements: [
        {name: "postgres", version: "16+", frequency: "almost every day", from: "09/2021", activity: 9},
        {name: "rongodb", version: "", frequency: "only when necessary", from: "04/2023", activity: 4},
        {name: "redis", version: "", frequency: "only when necessary", from: "06/2023", activity: 4}
    ]}
]

const es: IHardSkill[] = [
    {section: "Lenguajes", elements: [
        {name: "java", version: "11+", frequency: "casi todos los días", from: "08/2020", activity: 8},
        {name: "csharp", version: "10+", frequency: "día por medio", from: "08/2021", activity: 7},
        {name: "typescript", version: "4.6+", frequency: "todos los días", from: "03/2022", activity: 10},
        {name: "python", version: "3.9+", frequency: "solo cuando es necesario", from: "08/2019", activity: 4},
        {name: "sql", version: "", frequency: "casi todos los días", from: "08/2021", activity: 9}
    ]},
    {section: "Estoy aprendiendo", elements:[
        {name: "c", version: "11", frequency: "16 horas por semana", from: "03/2024", activity: 6},
        {name: "kotlin", version: "2.0+", frequency: "casi todos los días", from: "08/2024", activity: 9},
        {name: "rust", version: "1.8+", frequency: "8 horas por semana", from: "08/2024", activity: 3},
        {name: "go", version: "1.23+", frequency: "20 horas por semana", from: "04/2024", activity:7}
    ]},
    {section: "Entornos de ejecución", elements:[
        {name: "node", version: "18+", frequency: "solo cuando es necesario", from: "03/2020", activity: 5},
        {name: "deno", version: "", frequency: "usado un poco", from: "02/2024", activity: 3},
        {name: "bunjs", version: "1+", frequency: "casi todos los días", from: "05/2024", activity: 8}
    ]},
    {section: "Frontend", elements: [
        {name: "react", version: "18+", frequency: "solo cuando es necesario", from: "01/2021", activity: 7},
        {name: "nextjs", version: "13+", frequency: "elección preferida", from: "01/2023", activity: 8},
        {name: "astrojs", version: "4+", frequency: "casi todos los días", from: "01/2024", activity: 9},
    ]},
    {section: "Backend", elements:[
        {name: "spring-boot", version: "3+", frequency: "casi todos los días", from: "03/2021", activity: 9},
        {name: "asp.net-core", version: "6+", frequency: "día por medio", from: "08/2021", activity: 8},
        {name: "nest", version: "9+", frequency: "solo cuando es necesario", from: "11/2022", activity: 5},
        {name: "fast-api", version: "0.7+", frequency: "solo cuando es necesario", from: "04/2022", activity: 6}
    ]},
    {section: "Bases de datos", elements: [
        {name: "postgres", version: "16+", frequency: "casi todos los días", from: "09/2021", activity: 9},
        {name: "mongo", version: "", frequency: "solo cuando es necesario", from: "04/2023", activity: 4},
        {name: "redis", version: "", frequency: "solo cuando es necesario", from: "06/2023", activity: 4}
    ]}
]


export default getHardSkills