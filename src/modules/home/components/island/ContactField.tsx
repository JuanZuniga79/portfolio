import {Input} from "@core/components/ui/input.tsx";
import {Label} from "@core/components/ui/label.tsx";
import {cn} from "@core/lib/utils.ts";

interface Props{
    id: string;
    label: string;
    className?: string;
    type?: string;
    required?: boolean;
}

export default function ContactField({id, label, type, required, className}: Props){
    return(
        <div className={cn(className, '')}>
            <Label id={id} htmlFor={id}>{label}</Label>
            <Input name={id} id={id.concat('2')} required={required} minLength={5}
                   type={type ? type : "text"}
                   className='outline-none shadow-none border-0 border-b-2 rounded-none h-6 focus-visible:ring-0' />
        </div>
    )
}