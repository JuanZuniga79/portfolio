import type ISkill from "../types/ISkill.ts";
import typescript from "../assets/icons/typescript.svg"
import python from "../assets/icons/python.svg"
import java from "../assets/icons/java.svg"
import csharp from "../assets/icons/csharp.svg"
import kotlin from "../assets/icons/kotlin.svg"
import sql from "../assets/icons/sql.svg"
import rust from "../assets/icons/rust.svg"
import go from "../assets/icons/go.svg"
import lua from "../assets/icons/lua.svg"
import cpp from "../assets/icons/cpp.svg"
import bash from "../assets/icons/bash.svg"
import zig from "../assets/icons/zig.svg"

const programming: ISkill[] = [
    {
        name: "Typescript", experience: 4, lastProject: "current", learning: 5,
        usage: ["Backend", "Frontend", "Mobile", "Desktop", "Others"],
        level: 9, projects: 14, iconSrc: typescript.src, certifications: [],
        related: ["React", "Next", "Nest", "Astro", "React Native", "Angular"]
    },
    {
        name: "Python", experience: 2, lastProject: "2025", learning: 6,
        usage: ["Backend", "Others"],
        level: 7, projects: 6, iconSrc: python.src, certifications: [],
        related: ["qtile", "fastapi", "djando", "django rest"]
    },
    {
        name: "Java", experience: 4, lastProject: "current", learning: 4,
        usage: ["Backend", "Desktop"],
        level: 8, projects: 7, iconSrc: java.src, certifications: [],
        related: ["spring boot", "JavaFX"]
    },
    {
        name: "C#", experience: 4, lastProject: "current", learning: 4.5,
        usage: ["Backend", "Frontend", "Mobile", "Desktop", "Others"],
        level: 8, projects: 12, iconSrc: csharp.src, certifications: [],
        related: ["ASP.NET Core", "MAUI", "Blazor"]
    },
    {
        name: "Kotlin", experience: 1, lastProject: "2025", learning: 2,
        usage: ["Backend", "Mobile", "Desktop", "Others"],
        level: 6, projects: 3, iconSrc: kotlin.src, certifications: [],
        related: ["Spring Boot", "JavaFX", "Ktor", "Android Studio", "Kotlin Multiplatform"]
    },
    {
        name: "SQL", experience: 4, lastProject: "current", learning: 5,
        usage: ["Database"],
        level: 8, projects: 16, iconSrc: sql.src, certifications: [],
        related: ["postgres", "sql server", "sqlite"]
    },
    {
        name: "Rust", experience: 0, lastProject: "", learning: 1,
        usage: ["Backend", "Desktop", "OS"],
        level: 3, projects: 0, iconSrc: rust.src, certifications: [],
        related: ["Rocket", "Tauri"]
    },
    {
        name: "Go", experience: 0, lastProject: "2025", learning: 2,
        usage: ["Backend", "Desktop", "OS", "Others"],
        level: 5, projects: 1, iconSrc: go.src, certifications: [],
        related: ["Gin", "Fiber", "Wails"]
    },
    {
        name: "Lua", experience: 0, lastProject: "current", learning: 1,
        usage: ["OS", "Others"],
        level: 4, projects: 2, iconSrc: lua.src, certifications: [],
        related: ["AwesomeWM", "NeoVim"]
    },
    {
        name: "C/C++", experience: 0, lastProject: "2024", learning: 2,
        usage: ["OS", "Video Games"],
        level: 3, projects: 1, iconSrc: cpp.src, certifications: [],
        related: ["Allegro", "unreal engine"]
    },
    {
        name: "Bash", experience: 3, lastProject: "current", learning: 3,
        usage: ["Scripting", "Automation", "OS"],
        level: 5, projects: 2, iconSrc: bash.src, certifications: [],
        related: []
    },
    {
        name: "Zig", experience: 0, lastProject: "", learning: 0.1,
        usage: ["OS"],
        level: 1, projects: 0, iconSrc: zig.src, certifications: [],
        related: []
    }
]

export default programming;