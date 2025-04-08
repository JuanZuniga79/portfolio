import SkillsFilters from "./SkillsFilters.tsx";
import type ISkill from "../types/ISkill.ts";
import {useState} from "react";
import programming from "../data/programming.ts";
import type ISkillSystem from "../types/ISkillSystem.ts";
import Star from "./Star.tsx"
import Calendar from "../assets/sys/Calendar.tsx";
// @ts-ignore
import Achievement from "../assets/sys/Achievement.tsx";
import ProjectsIcon from "../assets/sys/Projects.tsx";
import Books from "../assets/sys/Books.tsx";
import frontend from "../data/frontend.ts";
import backend from "../data/backend.ts";
import mobile from "../data/mobile.ts";
import tools from "../data/tools.ts";

interface Props{
    data: ISkillSystem
}

export default function SkillsIsland({data}: Props) {

    const [items, setItems] = useState<ISkill[]>(programming);

    const handleActive = (key: number) => {
        if(key === 0) setItems(programming);
        else if(key === 1) setItems(frontend);
        else if(key === 2) setItems(backend);
        else if(key === 3) setItems(mobile);
        else if(key === 4) setItems(tools);
    }

    return(
        <div style={{gap: 10}} className="w-full flex flex-col items-center py-10">
            <ul className="flex items-center justify-center gap-x-2 w-full">
                <SkillsFilters onChange={handleActive} />
            </ul>
            <article className="w-full h-fit font-poppins">
                <ul className="w-full grid lg:grid-cols-2 2xl:grid-cols-3 gap-5 p-5 items-stretch">
                    {items.sort((a,b)=> b.level - a.level).map((item, index) => (
                        <li className="w-full h-full border-[1px] border-neutral-200 bg-white rounded-2xl p-5
                            gap-y-4 flex flex-col">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center justify-start gap-x-2">
                                    <img src={item.iconSrc} alt="" width={32} height={32} />
                                    <h4 className="font-semibold text-xl">{item.name}</h4>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Star value={item.level}/>
                                    <span className="text-xs font-light italic">
                                        {item.level > 8 ? data.expert : item.level > 6 ? data.advanced : item.level > 4
                                            ? data.intermediate: item.level > 2 ? data.beginner : data.trainee}
                                    </span>
                                </div>
                            </div>
                            <div className="w-full grid grid-cols-2 gap-2 font-light text-sm max-w-full">
                                <div className="w-full flex items-center gap-x-2">
                                    <figure className="text-neutral-500 w-5 h-5">
                                        <Achievement/>
                                    </figure>
                                    {data.experience} : {item.experience} {data.years}
                                </div>
                                <div className="flex items-center gap-x-2 w-full text-nowrap overflow-ellipsis">
                                    <figure className="text-neutral-500 min-w-5 min-h-5">
                                        <Calendar/>
                                    </figure>
                                    {data.last} : {item.lastProject.toLowerCase() === "current" ? data.current :
                                        item.lastProject}
                                </div>
                                <div className="flex items-center gap-x-2 w-full">
                                    <figure className="w-5 h-5 text-neutral-500">
                                        <ProjectsIcon/>
                                    </figure>
                                    {data.projects} : {item.projects}
                                </div>
                                <div className="flex items-center gap-x-2 w-full">
                                    <figure className="w-6 h-6 text-neutral-600">
                                        <Books/>
                                    </figure>
                                    {data.learning} : {item.learning} {data.years}
                                </div>
                            </div>
                            {item.usage.length > 0 && (
                                <ul className="text-sm font-light px-2 gap-x-2 flex items-center py-1 justify-around">
                                    {item.usage.map((item, index) => (
                                        <li key={index} className="capitalize">{item}</li>
                                    ))}
                                </ul>
                            )}
                            {item.related.length > 0 && (
                                <ul className="flex items-center justify-start gap-2 w-full font-light text-sm flex-wrap">
                                    {data.related} :
                                    {item.related.map((item, index) => (
                                        <span className="px-3 rounded-full border-[1px] border-neutral-400 text-xs
                                        font-normal capitalize"
                                              key={index}>
                                        {item}
                                    </span>
                                    ))}
                                </ul>
                            )}
                            {item.certifications.length > 0 && (
                                <ul className="flex items-center gap-x-2 w-full font-light text-sm">
                                    {data.certifications} :
                                    {item.certifications.map((item, index) => (
                                        <span key={index} className="px-3 border-[1px]
                                            border-neutral-400 rounded-full font-serif capitalize">
                                            {item}
                                        </span>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </article>
        </div>
    )
}