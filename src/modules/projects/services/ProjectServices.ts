import type IProjectFilter from "@projects/types/IProjectFilter.ts";
import {languages, frameworks, databases, technologies, areas, privacy, status, environments}
    from "@projects/data/projectsFilters.ts";
import TypeScript from "@core/assets/svg/typescript.svg"
import React from "@core/assets/svg/react.svg"
import Postgres from "@core/assets/svg/postgres.svg"
import Redux from "@core/assets/svg/redux.svg"
import Software from "@core/assets/svg/software.svg"
import Law from "@core/assets/svg/privacity.svg";
import Check from "@core/assets/svg/check.svg"
import Node from "@core/assets/svg/nodejs.svg"

export default class ProjectServices {
    static getFilters(lang: string): IProjectFilter[] {
        return [
            {label: lang==='en' ? 'Languages' : "Lenguages", icon: TypeScript.src, items: languages},
            {label: lang==='en' ? 'Databases' : "Bases de datos", icon: Postgres.src, items: databases},
            {label: "Frameworks", icon: React.src, items: frameworks},
            {label: lang==='en' ? 'Technologies' : "Tecnologias", icon: Redux.src, items: technologies},
            {label: "Environments", icon: Node.src, items: environments},
            {label: "Areas", icon: Software.src, items: areas },
            {label: lang==='en' ? 'Privacy' : "Privacidad", icon: Law.src, items: privacy},
            {label: lang==='en' ? "Status" : "Estado", icon: Check.src, items: status},
        ];
    }
}