import type ISkill from "../types/ISkill.ts";
import kotlin from "../assets/icons/kotlin.svg"
import react from "../assets/icons/react.svg"

const mobile: ISkill[] = [
    {
        name: "React Native", level: 6, projects: 2, experience: 2, learning: 3, iconSrc: react.src,
        lastProject: "2025", related: ["NativeWind", "Reusables RN", "Zustand", "Redux"],
        usage: ["Mobile"],
        certifications: []
    },
    {
        name: "Kotlin", level: 4, projects: 1, experience: 0, learning: 1, iconSrc: kotlin.src,
        lastProject: "current", related: ["Jetpack Compose", "Kotlin Multiplatform"],
        usage: ["Mobile"],
        certifications: []
    }
]

export default mobile