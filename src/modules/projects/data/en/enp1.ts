import type IProject from "../types/IProject";
import Python from "../../../../core/assets/icons/Python.astro";
import Bash from "../../../../core/assets/icons/Bash.astro";
import TOML from "../../../../core/assets/icons/TOML.astro";

const enp1: IProject = {
    id: 1,
    name: "Xorg X11 Rice",
    repository: "https://github.com/RustedCor/RustedXArch",
    cover: "https://raw.githubusercontent.com/RustedCor/RustedXArch/refs/heads/main/Pictures/Screenshots/sc1.png",
    technologies: [
        {name: "python", icon: Python},
        {name: "bash", icon: Bash},
        {name: "toml", icon: TOML}
    ],
    priority: 10,
    size: "big",
    status: false,
    public: true
}

export default enp1