import type IExperienceTimelineCard from "../types/IExperience";
import Education from "@core/assets/svg/education.svg"
const iconSRC = Education.src;


const es: IExperienceTimelineCard[] = [
    {title: "Ingenieria de sistemas", subtitle: "Universidad del magdalena", subtitleIcon: iconSRC,
        date: [new Date("2019/08/01"), new Date("2025/12/1")],
        description: [
            "Logré equilibrar exitosamente mi vida académica, profesional y familiar, lo que retrasó la finalización de mi título de educación superior.\nSin embargo, creo que mis logros profesionales aportarán mayor valor a largo plazo."
        ],
        status: false,
        technologies: [
            "SQL", "Diseño de bases de datos", "React", "Estructura de datos", "POO", "Arquitectura de software",
            "Ingenieria de Software", "Spring Boot 3", "Java", "Microservices", "Kotlin", "Docker", "C/C++", "Python",
            "Linux", "Sistemas Operativos"
        ]
    }
]

const en: IExperienceTimelineCard[] = [
    {title: "Systems Engeneering", subtitle: "University Of Magdalena", subtitleIcon: iconSRC,
        date: es[0].date,
        description: [
            "Successfully balanced my academic, professional, and family life, which has delayed the completion of my higher education degree.\nHowever, I believe that my professional achievements will provide greater long-term value."
        ],
        status: es[0].status,
        technologies: [
            "SQL", "Database Design", "React", "Data Structures", "OOP", "Software Architecture", "Software Engineering",
            "Spring Boot 3", "Java", "Microservices", "Kotlin", "Docker", "C/C++", "Python", "Linux", "Operating Systems"
        ]
    }
]

const education = (lang: string) => {
    const data = lang === "en" ? en : es;
    // @ts-ignore
    return data.sort((a, b) => a.date[0] - b.date[0])
}

export default education;