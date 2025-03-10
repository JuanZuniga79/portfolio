import type IFilter from "../types/IFilter";
import { languages } from "./entities";

export const languagesFilter: IFilter[] = [
  languages.python, languages.javascript, languages.typescript, languages.csharp,
  languages.java, languages.go, languages.bash
]