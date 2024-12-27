import type IHeaderItems from "@core/types/IHeaderItems.ts";

export const esHeaderItems: IHeaderItems[] = [
  {label: "Incio", url: "/es/", subMenu: [
      {label: "Hero", url: "#hero"},
      {label: "Servicios", url: "#services"},
    ]},
  {label: "Sobre mi", url: "/es/about/", subMenu: [
      {label: "Resumen", url: "#resume"},
      {label: "Experience", url: "#experience"},
      {label: "Educacion", url: "#education"},
      {label: "Courses", url: "#courses"},
      {label: "Hobbies", url: "#hobbies"},
    ]},
];

export const enHeaderItems: IHeaderItems[] = [
  {label: "Home", url: "/en/", subMenu: [
      {label: "Hero", url: "#hero"},
      {label: "Services", url: "#services"},
    ]},
  {label: "About me", url: "/en/about/", subMenu: [
      {label: "Summary", url: "#resume"},
      {label: "Experience", url: "#experience"},
      {label: "Education", url: "#education"},
      {label: "Courses", url: "#courses"},
      {label: "Hobbies", url: "#hobbies"},
    ]},
];