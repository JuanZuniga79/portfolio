import {useState} from "react";

interface Props{
    short_description: string,
    description: string,
}
export default function Description({ short_description, description }: Props) {

    const [open, setOpen] = useState<boolean>(false);

    return(
        <div className="font-light text-sm">
            <p>{short_description}</p>
            <p className={`${open ? "block" : "hidden"}`}>
                {description}
            </p>
            <p onClick={()=>setOpen(!open)}
               className="cursor-pointer text-blue-500 font-medium pt-2">
                {open ? "Hide" : "Show"}
            </p>
        </div>
    )
}