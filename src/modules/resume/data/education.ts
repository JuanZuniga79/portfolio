import type ICard from "../types/ICard"

const en: ICard[] = [
    {title: "Systems Engineering", subtitle: "University Of Magdalena", from: "August 2019", until: "Currently",
        status: false,
        details:[
            "Successfully balanced my academic, professional, and family life, which has delayed the completion of my higher education degree. However, I believe that my professional achievements will provide greater long-term value."
        ]
    }
]

const es: ICard[] = [
    {title: "Ingenieria De Sistemas", subtitle: "Universidad Del Magdalena", from: "Agosto 2019", until: "Actualmente",
        status: false,
        details: [
            "He logrado equilibrar mi vida académica, laboral y familiar, lo que ha retrasado la obtención de mi título de educación superior. Sin embargo, considero que mis logros profesionales serán de mayor provecho a largo plazo."
        ]
    }
]

export const education = (lang: string) => lang === "en" ? en : es;
