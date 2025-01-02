import type ICourseTimelineCard from "@about/types/ICourses";
import Education from "@core/assets/svg/education.svg"
const iconSRC = Education.src;

const certificates: ICourseTimelineCard[] = [
  {
    title: "Java Backend Developer",
    subtitle: "Alura Latam",
    subtitleIcon: iconSRC,
    date: [new Date("2023-04"), new Date("2023-10")],
    description: [],
    status: true,
    technologies: ["Spring Boot", "Sprint Security", "MySQL", "Agile", "Scrum", "React"],
    certificateUrl: "https://app.aluracursos.com/program/certificate/04e0e6e8-97b9-4234-841a-917e612d11ca?lang"
  },
  {
    title: ".NET FullStack Developer Specialization",
    subtitle: "Board Infinity - Coursera",
    subtitleIcon: iconSRC,
    date: [new Date("2024")],
    description: [],
    status: false,
    technologies: ["React", "C#", "ASP.NET Core"],
    certificateUrl: undefined
  },
  {
    title: "Meta Android Developer Professional Certificate",
    subtitle: "Meta - Coursera",
    subtitleIcon: iconSRC,
    date: [new Date("2024")],
    description: [],
    status: false,
    technologies: [
      "Kotlin",
      "Android Studio",
      "Android",
      "React",
      "Git",
      "Figma",
      "UI/UX",
      "Javascript",
      "React Native"
    ],
    certificateUrl: undefined
  }
];


export default certificates;
