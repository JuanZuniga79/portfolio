import Filter from "../components/Filter.tsx";
import {languagesFilter} from "../data/filters.ts";
import {useEffect, useState} from "react";

interface IItems{
    name: string;
    category: string;
    type: string;
    skills: string[];
    repo: string;
    cover: string;
    live: string;
    qualification: number;
    Content: any;
}

interface Props{
    lang: string
    items: IItems[];
}
export default function ProjectsSection({lang, items}: Props){

    const langPH = lang === "es" ? "Lenguajes" : "Languages";
    const [data, setData] = useState<IItems[]>([]);
    const [language, setLanguage] = useState<string>();

    useEffect(() => {
        if(items.length === 0) return;
        console.log(language);
        if(!language){
            setData(items);
            return;
        }
        const elements = items.filter((item) => {
            const element = item.skills.find((skill) => {
                if(skill.toLowerCase().includes(language.toLowerCase())) return skill
            })
            if(element) return item
        })
        setData(elements);
    }, [items, language]);

    return(
        <>
            <h5 className="text-2xl font-serif font-medium">
                {lang === "es" ? "Filtros" : "Filters"}
            </h5>
            <div className="flex items-center justify-start gap-2">
                <Filter id="languages" placeholder={langPH}
                        onChange={(value) => setLanguage(value)} items={languagesFilter} />
            </div>
            <div className="w-full h-[1px] bg-neutral-300"/>
            <ul className="grid 2xl:grid-cols-3 2xl:gap-10 grid-cols-2 gap-5 items-stretch">
                {data.map((item, index) => (
                    <li key={index} className="rounded-2xl w-full h-fit overflow-hidden bg-white">
                        <picture className="w-full h-[50%]">
                            <img src={item.cover} height={200} className="h-[250px] w-full" alt="project image" />
                        </picture>
                        <div className="p-5 flex flex-col gap-y-2">
                            <h5 className="text-2xl font-semibold italic">{item.name}</h5>
                            <ul className="flex items-center justify-start gap-2 flex-wrap">
                                {item.skills.map((skill, index) => (
                                    <li key={index} className="px-2 py-0.5 rounded-lg text-sm bg-neutral-100
                                        font-extralight">
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                            <div className="font-light text-lg">
                                {item.category}
                            </div>
                            <div className="flex items-center justify-between">
                                {item.repo !== "" ? (
                                    <a href={item.repo} className="px-3 py-0.5 bg-blue-500 w-fit text-white
                                    rounded-lg font-light hover:bg-blue-400" target="_blank">
                                        Repository
                                    </a>
                                ):(
                                    <div className="px-3 py-0.5 bg-blue-500 w-fit text-white rounded-lg font-light">
                                        Private Repo
                                    </div>
                                )}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}