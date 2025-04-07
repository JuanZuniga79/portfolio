import skillFilters from "../data/skillsFilters.ts";
import {useEffect, useState} from "react";
interface Props{
    onChange: (key: number) => void;
}
export default function SkillsFilters({onChange}: Props) {
    const [active, setActive] = useState<number>(0);
    const [firstCharge, setFirstCharge] = useState<boolean>(true);

    useEffect(() => {
        const local = localStorage.getItem("skillsFilters");
        if(!local) {
            setFirstCharge(false);
            return;
        }
        setActive(parseInt(local));
        setFirstCharge(false);
    }, []);

    useEffect(() => {
        if(firstCharge) return;
        onChange(active);
        localStorage.setItem("skillsFilters", active.toString());
    }, [active]);

    return(
        <>
            {skillFilters.map((skill) => (
                <li key={skill.key} onClick={() => setActive(skill.key)}
                    className={`px-4 border-b-2 font-poppins select-none font-medium hover:border-b-blue-400
                        cursor-pointer text-sm 2xl:text-lg ${active === skill.key && 
                        'border-b-blue-400 text-blue-400'}`}>
                    <span>{skill.value}</span>
                </li>
            ))}
        </>
    )
}