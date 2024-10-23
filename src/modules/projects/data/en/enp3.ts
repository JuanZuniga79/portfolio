import Bash from "../../../../core/assets/icons/Bash.astro";
import CSS from "../../../../core/assets/icons/CSS.astro";
import type IProject from "../types/IProject";

const enp3: IProject = {
    id: 3,
    cover: "https://raw.githubusercontent.com/RustedCor/Hyprland-Rice/refs/heads/main/.config/hypr/screenshots/1722477457.png",
    name: "Hyprland Rice",
    priority: 5/10,
    public: true,
    size: "small",
    status: false,
    technologies: [
        {name: "css", icon: CSS},
        {name: "bash", icon: Bash}
    ],
    repository: "https://github.com/RustedCor/Hyprland-Rice"
}

export default enp3