import type IProject from "../types/IProject";
import Astro from "../../../../core/assets/icons/Astro.astro";

const enp1: IProject = {
    name: "portfolio",
    content: {collection: "projects", name: "enp1"},
    repository: "https://github.com/JuanZuniga79/portfolio",
    documentation: "https://github.com/JuanZuniga79/portfolio/blob/main/README.md",
    collaborators: [],
    technologies: [
        {name: "astro", icon: Astro}
    ]
}

export default enp1