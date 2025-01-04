import {Button} from "@core/components/ui/button.tsx";
import {Popover, PopoverContent, PopoverTrigger} from "@core/components/ui/popover.tsx";
import {Check, ChevronsUpDown} from "lucide-react";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList
} from "@core/components/ui/command.tsx";
import {cn} from "@core/lib/utils.ts";

interface FilterPopoverProps {
    title: string
    icon: string
    options: string[]
    selected: string[]
    onSelect: (value: string) => void
}

export default function FilterPopover({ title, icon, options, selected, onSelect }: FilterPopoverProps) {
    return (
        <Popover>
            <PopoverTrigger asChild className='focus-visible:outline-none focus-visible:ring-0'>
                <Button
                    variant="outline"
                    className="justify-between w-full sm:w-[200px] font-light capitalize"
                >
                    <div className="flex items-center gap-2">
                        <img src={icon} alt="filter icon" className="h-5 w-5" />
                        <span>{title}</span>
                    </div>
                    <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full sm:w-[200px] p-0 font-light capitalize">
                <Command>
                    <CommandInput placeholder={`Search ${title.toLowerCase()}...`} />
                    <CommandList>
                        <CommandEmpty>No {title.toLowerCase()} found.</CommandEmpty>
                        <CommandGroup>
                            {options.map((option) => (
                                <CommandItem
                                    key={option}
                                    onSelect={() => onSelect(option)}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            selected.includes(option)
                                                ? "opacity-100"
                                                : "opacity-0"
                                        )}
                                    />
                                    {option}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
