import Bash from "../../../../core/assets/icons/Bash.astro";
import Python from "../../../../core/assets/icons/Python.astro";
import type IProject from "../types/IProject";

const enp2: IProject = {
    id: 2,
    cover: "https://raw.githubusercontent.com/RustedCor/qtile/refs/heads/main/content/sc3.png",
    public: true,
    status: false,
    size: "small",
    priority: 2,
    repository: "https://github.com/RustedCor",
    name: "Pure QTile Config",
    technologies: [
        {name: "python", icon: Python},
        {name: "bash", icon: Bash}
    ]
}

export default enp2