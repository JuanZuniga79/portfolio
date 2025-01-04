import type { ISkill, ISkillSection } from "@about/types/ISkill";
//languages
import Typescript from "@core/assets/svg/typescript.svg"
import Csharp from "@core/assets/svg/csharp.svg"
import Java from "@core/assets/svg/java.svg"
import Kotlin from "@core/assets/svg/kotlin.svg"
import SQL from "@core/assets/svg/sql.svg"
//environments
import Nodejs from "@core/assets/svg/nodejs.svg"
import Bunjs from "@core/assets/svg/bunjs.svg"
import Dotnet from "@core/assets/svg/dotnet.svg"
//frontend
import React from "@core/assets/svg/react.svg"
import Astro from "@core/assets/svg/astro.svg"
import Next from "@core/assets/svg/next.svg"
import Angular from "@core/assets/svg/angular.svg"
import Solid from "@core/assets/svg/solid.svg"
//backend
import Spring from "@core/assets/svg/spring.svg"
import Nest  from "@core/assets/svg/nest.svg"
//others
import html from "@core/assets/svg/html.svg"
import css from "@core/assets/svg/css.svg"
import markdown from "@core/assets/svg/markdown.svg"

const languages: ISkill[] = [
  {name: "typescript", icon: Typescript, frequency: 8, projects: 2, colors: [
      "bg-blue-300/40", "from-blue-300", "to-blue-600"
    ]},
  {name: "csharp", icon: Csharp, frequency: 7, projects: 1, colors: [
      "bg-purple-300/40", "from-purple-300", "to-purple-600"
    ]},
  {name: "java", icon: Java, frequency: 7, projects: 1, colors: [
      "bg-blue-300/40", "from-blue-300", "to-blue-600"
    ]},
  {name: "kotlin", icon: Kotlin, frequency: 5, projects: 1, colors: [
      "bg-blue-300/40", "from-blue-300", "to-blue-600"
    ]},
  {name: "sql", icon: SQL, frequency: 8, projects: 1, colors: [
      "bg-gray-300/40", "from-gray-300", "to-gray-600"
    ]}
];

const environments: ISkill[] = [
  {name: "nodejs", icon: Nodejs, frequency: 5, projects: 1, colors: [
      "bg-green-300/40", "from-green-300", "to-green-600"
    ]},
  {name: "bun", icon: Bunjs, frequency: 8, projects: 1, colors: [
      "bg-amber-300/40", "from-amber-300", "to-amber-600"
    ]},
  {name: "dotnet", icon: Dotnet, frequency: 7, projects: 1, colors: [
      "bg-violet-300/40", "from-violet-300", "to-violet-600"
    ]},
  {name: "jdk", icon: Java, frequency: 7, projects: 1, colors: [
      "bg-blue-300/40", "from-blue-300", "to-blue-600"
    ]}
]

const frontend: ISkill[] = [
  {name: "react", icon: React, frequency: 7, projects: 1, colors: [
      "bg-cyan-200/40", "from-cyan-300", "to-cyan-600"
    ]},
  {name: "astro", icon: Astro, frequency: 6, projects: 1, colors: [
      "bg-orange-200/40", "from-orange-300", "to-orange-600"
    ]},
  {name: "next", icon: Next, frequency: 8, projects: 1, colors: [
      "bg-gray-300/40", "from-gray-300", "to-gray-600"
    ]},
  {name: "angular", icon: Angular, frequency: 6, projects: 1, colors: [
      "bg-red-200/40", "from-red-300", "to-red-600"
    ]},
  {name: "solid", icon: Solid, "frequency": 2, projects: 1, colors: [
      "bg-blue-300/40", "from-blue-300", "to-blue-600"
    ]}
]

const backend: ISkill[] = [
  {name: "spring boot", icon: Spring, frequency: 7, projects: 1, colors: [
      "bg-green-200/40", "from-green-300", "to-green-600"
    ]},
  {name: "ASP.NET Core", icon: Dotnet, frequency: 7, projects: 1, colors: [
      "bg-violet-300/40", "from-violet-300", "to-violet-600"
    ]},
  {name: "Nest", icon: Nest, frequency: 6, projects: 1, colors: [
      "bg-red-200/40", "from-red-300", "to-red-600"
    ]}
]

const otherLanguages: ISkill[] = [
  {name: "html", icon: html, frequency: 9, projects: 1, colors: [
      "bg-orange-200/40", "from-orange-300", "to-orange-600"
    ]},
  {name: "css", icon: css, frequency: 6, projects: 1, colors: [
      "bg-blue-300/40", "from-blue-300", "to-blue-600"
    ]},
  {name: "markdown", icon: markdown, frequency: 3, projects: 1, colors: [
      "bg-gray-200/40", "from-gray-300", "to-gray-600"
    ]}
]

const skills = (lang: string) => {
  const title = lang === "en" ? "Programing Languages" : "Lenguajes de Programación";
  const title2 = lang === "en" ? "development environment" : "entorno de desarrollo";
  const title3 = lang === "en" ? "Other Languages" : "Otros Lenguajes";
  const data: ISkillSection[] = [
    {title: title, skills: languages},
    {title: title2, skills: environments},
    {title: "Frontend", skills: frontend},
    {title: "Backend", skills: backend},
    {title: title3, skills: otherLanguages},
  ]
  return data;
}

export default skills;