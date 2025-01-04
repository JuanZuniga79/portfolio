import type IProjectFilter from "@projects/types/IProjectFilter.ts";
import FilterPopover from "@projects/components/FilterPopover.tsx";

interface Props{
    lang: string,
    filters: IProjectFilter[],
    getSelected: (label: string) => string[],
    addSelected: (label: string, value: string, icon: string) => void,
}

export default function ProjectsSectionFilters(
    {lang, filters, getSelected, addSelected}: Props
) {

    return (
        <div className='flex flex-col gap-y-2'>
            <h2 className='text-2xl italic'>{lang==="en" ? "Projects Filters" : "Filtros"}</h2>
            <ul className='flex items-center justify-evenly flex-wrap gap-5'>
                {filters.map((filter) => (
                    <FilterPopover title={filter.label} icon={filter.icon} options={filter.items}
                                   selected={getSelected(filter.label)}
                                   onSelect={(value: string) => addSelected(filter.label, value, filter.icon)}
                    />
                ))}
            </ul>
        </div>
    )
}