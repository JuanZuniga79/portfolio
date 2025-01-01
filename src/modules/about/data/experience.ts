import type IExperienceTimelineCard from "@about/types/IExperience.ts";
import Portfolio from "@core/assets/svg/portfolio.svg"
const portfolioSRC = Portfolio.src;

const en: IExperienceTimelineCard[] = [
    {title: "FullStack Junior Developer", subtitle: "IGD S.A.S", subtitleIcon: portfolioSRC, status: true,
        date: [new Date("2021/01/01"), new Date("2023/12/31")],
        description: [
            "Successfully upgraded a core project for my company and am currently leading its migration to modern technologies.",
            "Independently assigned to maintain, grow, and develop a significant project, demonstrating my ability to deliver results without senior supervision.",
            "Trained new talent to adapt to the company and supported their professional growth by enhancing their technical skills.",
        ],
        technologies: ["React", "ASP.NET Core", "Sprint Boot 3", "Nest", "FastAPI"]
    },
    {title: "FullStack Semi-Senior Developer", subtitle: "IGD S.A.S", subtitleIcon: portfolioSRC, status: false,
        date: [new Date("2024/01/01"), new Date(Date.now())],
        description: [
            "Independently assigned to maintain, grow, and develop a significant project, demonstrating my ability to deliver results without senior supervision.",
        ],
        technologies: ["React", "Next", "ASP.NET Core", "Sprint Boot 3", "Nest"],
    }
]
const es: IExperienceTimelineCard[] = [
    {title: "Desarrollador FullStack Junior", subtitle: "IGD S.A.S", subtitleIcon: portfolioSRC, status: en[0].status,
        date: [new Date("2021/01/01"), new Date("2023/12/31")],
        description: [
            "Actualicé con éxito un proyecto central de mi empresa y actualmente lidero su migración a tecnologías modernas.",
            "Asignado de forma independiente para mantener, desarrollar y hacer crecer un proyecto importante, demostrando mi capacidad para entregar resultados sin supervisión senior.",
            "Capacité a nuevos talentos para adaptarse a la empresa y apoyé su crecimiento profesional mejorando sus habilidades técnicas.",
        ],
        technologies: ["React", "ASP.NET Core", "Sprint Boot 3", "Nest", "FastAPI"]
    },
    {title: "Desarrollador FullStack Semi-Senior", subtitle: "IGD S.A.S", subtitleIcon: portfolioSRC, status: en[1].status,
        date: [new Date("2024/01/01"), new Date(Date.now())],
        description: [
            "Asignado de forma independiente para mantener, desarrollar y hacer crecer un proyecto importante, demostrando mi capacidad para entregar resultados sin supervisión senior.",
        ],
        technologies: ["React", "Next", "ASP.NET Core", "Sprint Boot 3", "Nest"],
    }
]

const experience = (lang: string) => {
    const data = lang === 'en' ? en : es
    // @ts-ignore
    return data.sort((a, b) => a.date[0] - b.date[0])
}

export default experience;