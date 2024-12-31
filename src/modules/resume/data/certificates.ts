import type ICard from "@resume/types/ICard.ts";

export const certificates: ICard[] = [
    {title: "Java Backend Developer", subtitle: "Alura Latam", from: "Abril 2023", until: "Octubre 2023",
        href: "https://app.aluracursos.com/program/certificate/04e0e6e8-97b9-4234-841a-917e612d11ca?lang",
        status: true,
        details: [
            "Spring Boot 3", "Sprint Security", "MySQL", "Agile", "Scrum", "React"
        ]
    },
    {title: ".NET FullStack Developer Specialization", subtitle: "Board Infinity - Coursera", from: "2024",
        until: "??", status: false,
        details: [
            "React", "C#", "ASP.NET Core"
        ]
    },
    {title: "Meta Android Developer Professional Certificate", subtitle: "Meta - Coursera", from: "2024",
        until: "??", status: false,
        details: [
            "Kotlin", "Android Studio", "Android", "React", "Git", "Figma", "UI/UX", "Javascript", "React Native",
        ]
    }
]