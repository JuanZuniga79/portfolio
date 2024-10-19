import type ISoftSkill from "./types/ISoftSkill";

const getSoftSkills = (lang: string) => lang === "en" ? en : es

const en: ISoftSkill[] = [
    {
        name: "Fast Learning",
        description: "Ability to quickly understand and apply new information and skills."
    },
    {
        name: "Resilience",
        description: "Capacity to recover quickly from difficulties and adapt to change."
    },
    {
        name: "Working Under Pressure",
        description: "Capability to perform effectively and remain calm in stressful or time-sensitive situations."
    },
    {
        name: "Teamwork",
        description: "Ability to collaborate and work well with others to achieve a common goal."
    },
    {
        name: "Leadership",
        description: "Skill in guiding and motivating a team towards achieving objectives."
    }
];

const es: ISoftSkill[] = [
    {
        name: "Aprendizaje Veloz",
        description: "Capacidad para comprender y aplicar rápidamente nueva información y habilidades."
    },
    {
        name: "Resiliencia",
        description: "Capacidad para recuperarse rápidamente de las dificultades y adaptarse al cambio."
    },
    {
        name: "Trabajo Bajo Presión",
        description: "Habilidad para desempeñarse de manera efectiva y mantener la calma en situaciones estresantes o con plazos ajustados."
    },
    {
        name: "Trabajo en Equipo",
        description: "Capacidad para colaborar y trabajar bien con otros para lograr un objetivo común."
    },
    {
        name: "Liderazgo",
        description: "Habilidad para guiar y motivar a un equipo hacia el logro de objetivos."
    }
];

export default getSoftSkills
