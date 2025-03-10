import type IFilter from "../types/IFilter.ts";
import {Popover, PopoverContent, PopoverTrigger} from "../../../core/components/ui/popover.tsx";
import {useEffect, useState} from "react";
import {Button} from "../../../core/components/ui/button.tsx";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList
} from "../../../core/components/ui/command.tsx"
import {languagesFilter} from "../data/filters.ts";
import {Check} from "lucide-react";
import {cn} from "../../../core/lib/utils.ts";

interface Props{
    id: string
    onChange: (value?: string) => void;
    placeholder: string
    items: IFilter[]
}
export default function Filter({items,placeholder, id, onChange}: Props){

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState<string>();
    const [active, setActive] = useState<IFilter>();

    useEffect(() => {
        if(!value) return;
        if(value === "") {
            setActive(undefined);
            return;
        }
        const item = items.find((item) => item.label === value);
        if(!item) return;
        setActive(item);
        onChange(value);
    }, [value]);

    return(
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant="ghost" role="combobox" aria-expanded={open}
                        className="w-[200px] justify-start border-[1px] cursor-pointer font-light border-neutral-200
                        hover:bg-neutral-100 transition-colors duration-300 hover:border-neutral-300 bg-white
                        text-base">
                    {active && value ? (
                        <>
                            <img src={active.icon} alt="filter icon" className="w-5 h-5"/>
                            <span>{active.label}</span>
                        </>
                    ): (
                        <span>
                            {placeholder}
                        </span>
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder={`select ${placeholder}`} />
                    <CommandList>
                        <CommandEmpty>{`No ${placeholder} found`}</CommandEmpty>
                        <CommandGroup>
                            {items.map((item) => (
                                <CommandItem key={item.label} value={item.label}
                                             className="font-light cursor-pointer flex items-center justify-between"
                                             onSelect={() => {
                                                 if(!value) setValue(item.label)
                                                 else if(value === item.label) {
                                                     setValue("");
                                                     onChange()
                                                 }
                                                 else setValue(item.label);
                                                 setOpen(false);
                                             }}>
                                    <div className='flex items-center gap-x-2'>
                                        <img src={item.icon} alt="filter icon" className="w-5 h-5"/>
                                        <span>{item.label}</span>
                                    </div>
                                    <Check className={cn("h-4 w-4",
                                        value === item.label ? "opacity-100" : "opacity-0")}/>
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}