import type IHeaderItems from "@core/types/IHeaderItems.ts";

export const esHeaderItems: IHeaderItems[] = [
  {
    label: "Incio", url: "", subMenu: [
      { label: "Hero", url: "#hero" },
      { label: "Servicios", url: "#services" },
      { label: "Contactame", url: "#contact" },
    ]
  },
  {
    label: "Sobre mi", url: "/about", subMenu: [
      { label: "Experiencia", url: "#experience" },
      { label: "Educacion", url: "#education" },
      { label: "Cursos", url: "#courses" },
      { label: "Habilidades", url: "#skills" },
      { label: "Pasatiempos", url: "#hobbies" },
    ]
  },
];

export const enHeaderItems: IHeaderItems[] = [
  {
    label: "Home", url: "", subMenu: [
      { label: "Hero", url: "#hero" },
      { label: "Services", url: "#services" },
      { label: "Contact me", url: "#contact" },
    ]
  },
  {
    label: "About me", url: "/about", subMenu: [
      { label: "Experience", url: "#experience" },
      { label: "Education", url: "#education" },
      { label: "Courses", url: "#courses" },
      { label: "Skills", url: "#skills" },
      { label: "Hobbies", url: "#hobbies" },
    ]
  },
];