import { getDate } from "../../services/dateServices";
import type ITimeline from "../../types/ITimeline";

const esENE: ITimeline[] = [
  {
    type: "experience", title: "Freelancer", company: "",
    start: getDate('01-01-2020'), end: undefined,
    description: "No puedo dar detalles de cada proyecto que he realizado como freelancer, pero muchos de esos trabajos sentaron las bases para mi primer empleo. Hoy en día, sigo trabajando como freelancer para generar ingresos adicionales.",
    achievements: [],
    technologies: []
  },
  {
    type: "experience", title: "Desarrollador web junior", company: "IGD SAS",
    start: getDate('01-01-2021'), end: getDate('28-02-2024'),
    description: "Trabajé como desarrollador líder en el proyecto frontend más grande de la empresa, donde logré numerosos avances gracias a mi eficiencia en la resolución de problemas.",
    achievements: [
      "Migré completamente la arquitectura del proyecto, actualizando React 16 a Vite con React 18 y reemplazando CSS puro con Tailwind CSS, además de implementar varias optimizaciones en el software.",
      "Lideré y capacité pequeños equipos en proyectos de menor prioridad, logrando excelentes resultados.",
    ],
    technologies: ["Java", "Spring Boot", "Python", "FastAPI", "NodeJS", "TailwindCSS", "CSharp", "ASP.NET Core"]
  },
  {
    type: "experience", title: "Desarrollador web semi senior", company: "IGD SAS",
    start: getDate('01-03-2024'), end: getDate('05-03-2025'),
    description: "Mi contrato fue renovado con el propósito de continuar el desarrollo del proyecto principal de la empresa. Sin embargo, actualmente me encuentro en transición hacia nuevas oportunidades laborales, con el objetivo de enfrentar desafíos que me permitan seguir creciendo profesionalmente.",
    achievements: ["próximamente"],
    technologies: ["próximamente"]
  },
  {
    type: "education", title: "Ingeniería de sistemas", company: "Universidad del Magdalena",
    start: getDate('05-08-2019'), end: undefined,
    description: "Debido a mi carga laboral, así como a algunos problemas financieros y personales, no he podido finalizar mis estudios. Actualmente, me faltan siete materias por completar, que suman un total de 28 créditos.",
    achievements: ["Participé en la Asociación de Estudiantes de Ingeniería de Sistemas."],
    technologies: ["ReactJS", "NextJS", "NodeJS", "Java", "Spring Boot", "Python", "Microservicios", "Ingeniería de Software", "Arquitectura de Software"]
  }
]

export default esENE