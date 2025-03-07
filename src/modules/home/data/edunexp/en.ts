import { getDate } from "../../services/dateServices";
import type ITimeline from "../../types/ITimeline";

const enENE: ITimeline[] = [
  {
    type: "experience", title: "Freelancer", company: "",
    start: getDate('01-01-2020'), end: undefined,
    description: "I can't give details of every project I've done as a freelancer, but many of those jobs laid the groundwork for my first job. Today, I continue to work as a freelancer to generate additional income.",
    achievements: [],
    technologies: []
  },
  {
    type: "experience", title: "Junior web developer", company: "IGD SAS",
    start: getDate('01-01-2021'), end: getDate('1-03-2024'),
    description: "I worked as a lead developer on the company's largest frontend project, where I achieved numerous accomplishments thanks to my efficiency in problem solving.",
    achievements: [
      "I single-handedly migrated the project architecture, upgrading React 16 to Vite with React 18 and replacing pure CSS with Tailwind CSS, as well as implementing various optimizations in the software.",
      "I led and trained small teams on lower priority projects, achieving excellent results.",
    ],
    technologies: ["Java", "Spring Boot", "Python", "fast API", "NodeJS", "TailwindCSS", "CSharp", "ASP.NET Core"]
  },
  {
    type: "experience", title: "Semi Senior Web Developer", company: "IGD SAS",
    start: getDate('01-03-2024'), end: getDate('05-03-2025'),
    description: "My contract was renewed with the purpose of continuing the development of the company's main project. However, I am currently in transition towards new job opportunities, with the aim of facing challenges that allow me to continue growing professionally.",
    achievements: ["coming soon"],
    technologies: ["coming soon"]
  },
  {
    type: "education", title: "Ingenieria de sistemas", company: "University Of Magdalena",
    start: getDate('05-08-2019'), end: undefined,
    description: "Due to my workload, as well as some financial and personal problems, I have not been able to complete my studies. Currently, I have seven subjects left to complete, which add up to a total of 28 credits.",
    achievements: ["Participé en la Asociación de Estudiantes de Ingeniería de Sistemas."],
    technologies: ["ReactJS", "NextJS", "NodeJS", "Java", "Spring Boot", "Python", "Microservices", "Software Engineering", "Software Architecture"]
  }
]

export default enENE