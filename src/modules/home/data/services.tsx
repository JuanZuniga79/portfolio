import type IService from "@home/type/IService.ts";
import Page from "@core/assets/svg/page.svg"
import Server from "@core/assets/svg/server.svg"
import FullStack from "@core/assets/svg/fullstack.svg"

export const esServices: IService[] = [
  {label: "Frontend", icon: Page,
    description: "Desarrollo una amplia gama de soluciones web: sitios web informativos, plataformas dinámicas con " +
      "gestión de contenido, aplicaciones web interactivas y soluciones en tiempo real para empresas y particulares."},
  {label: "Backend", icon: Server,
    description: "Desarrollo soluciones robustas de backend, con un fuerte enfoque en la seguridad y escalabilidad. " +
      "Desde APIs RESTful y microservicios hasta sistemas complejos en tiempo real."},
  {label: "FullStack", icon: FullStack,
    description: "Ofrezco soluciones integrales de desarrollo web, abarcando desde el diseño de la interfaz de usuario " +
      "hasta la implementación de la lógica del servidor y la gestión de bases de datos. Mi enfoque full-stack me " +
      "permite crear aplicaciones web completas y funcionales."}
]