import type IFilter from "../types/IFilter"
import python from "../../../core/assets/icons/python.svg"
import javascript from "../../../core/assets/icons/javascript.svg"
import typescript from "../../../core/assets/icons/typescript.svg"
import csharp from "../../../core/assets/icons/csharp.svg"
import java from "../../../core/assets/icons/java.svg"
import go from "../../../core/assets/icons/go.svg"
import bash from "../../../core/assets/icons/bash.svg"

export const languages: Record<string, IFilter> = {
  python: { label: "Python", icon: python.src },
  javascript: { label: "Javascript", icon: javascript.src },
  typescript: { label: "Typescript", icon: typescript.src },
  csharp: { label: "CSharp", icon: csharp.src },
  java: { label: "Java", icon: java.src },
  go: { label: "Go", icon: go.src },
  bash: { label: "Bash", icon: bash.src }
}
