import type ICard from "@resume/types/ICard.ts";

export const about = (lang: string) => lang === 'en' ?
    "Systems Engineering student with 4 years of proven experience in the tech industry.\n" +
    "I have excelled in key roles in frontend and backend development, as well as leading small projects, always prioritizing customer needs.\n" +
    "Known for my ability to work collaboratively, train new team members, and deliver high-quality technical solutions to ensure project success."
    :
    "Estudiante de Ingeniería de Sistemas con 4 años de experiencia comprobable en el sector tecnológico.\n" +
    "He desempeñado roles clave en desarrollo frontend, backend y liderazgo de proyectos, siempre enfocado en satisfacer las necesidades de los clientes.\n " +
    "Destaco por mi capacidad para trabajar en equipo, capacitar a nuevos integrantes y aportar soluciones técnicas efectivas, asegurando resultados de alta calidad en cada proyectoo."


export const experience: (lang: string)=> ICard[] = (lang: string) => lang === 'en' ?
    [
        {title: "Systems Engineer", subtitle: "IGD S.A.S", from: "January 2021", until: "Currently", details:
                [
                    "Utilized technologies such as React, Next.js, ASP.NET, Spring Boot, and FastAPI.",
                    "Successfully upgraded a core project for my company and am currently leading its migration to modern technologies.",
                    "Independently assigned to maintain, grow, and develop a significant project, demonstrating my ability to deliver results without senior supervision.",
                    "Trained new talent to adapt to the company and supported their professional growth by enhancing their technical skills.",
                ],
            status: false,
        }
    ] as ICard[]
    :
    [
        {title: "Ingeniero de sistemas", subtitle: "IGD S.A.S", from: "Enero 2021", until: "Actualmente", details:
                [
                    "Utilicé tecnologías como React, Next.js, ASP.NET, Spring Boot y FastAPI.",
                    "Mejoré con éxito un proyecto central de mi empresa y actualmente estoy liderando su migración a tecnologías modernas.",
                    "Fui asignado para mantener, expandir y desarrollar un proyecto de forma independiente, demostrando mi capacidad para entregar resultados sin supervisión de un senior.",
                    "Capacité a nuevos talentos para adaptarse a la empresa y apoyé su crecimiento profesional mejorando sus habilidades técnicas."
                ],
            status: false,
        }
    ] as ICard[]