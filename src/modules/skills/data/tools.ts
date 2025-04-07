import type ISkill from "../types/ISkill.ts"
import vim from "../assets/icons/vim.svg"
import git from "../assets/icons/git.svg"
import docker from "../assets/icons/docker.svg"

const tools: ISkill[] = [
    {
        name: "Neovim", level: 7, experience: 3, learning: 3, projects: 8, lastProject: "current", iconSrc: vim.src,
        usage: ["coding"], related: ["Lua", "Bash", "Linux", "Nix"],
        certifications: []
    },
    {
        name: "Git", level: 8, experience: 4, learning: 4, projects: 30, lastProject: "current", iconSrc: git.src,
        usage: ["Version Controling"], related: ["Bash", "Linux"],
        certifications: []
    },
    {
        name: "Docker", level: 7, experience: 4, learning: 4, projects: 10, lastProject: "current", iconSrc: docker.src,
        usage: ["virtualization", "containerization"], related: ["Docker Compose", "WSL", "Linux"],
        certifications: []
    }
]

export default tools