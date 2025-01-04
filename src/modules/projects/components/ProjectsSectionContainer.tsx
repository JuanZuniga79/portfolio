import ProjectsSectionFilters from "@projects/components/ProjectsSectionFilters.tsx";
import type IProjectFilter from "@projects/types/IProjectFilter.ts";
import {useEffect, useState} from "react";
import ProjectServices from "@projects/services/ProjectServices.ts";
import SelectedFiltersList from "@projects/components/SelectedFiltersList.tsx";

export default function ProjectsSectionContainer({lang}: {lang: string}) {

    const [filters, setFilters] = useState<IProjectFilter[]>([]);
    const [selectedFilters, setSelectedFilters] = useState<IProjectFilter[]>([]);

    useEffect(() => {
        setFilters(ProjectServices.getFilters(lang));
    }, []);

    const getSelected = (label: string) : string[] => {
        const filtered = selectedFilters.find((filter) => filter.label === label);
        return !filtered ? [] : filtered.items;
    }

    const addSelected = (label: string, value: string, icon: string) => {
        const existingFilterIndex = selectedFilters.findIndex((filter) => filter.label === label);
        const updatedFilters = [...selectedFilters];
        if (existingFilterIndex === -1) updatedFilters.push({ label, items: [value], icon });
        else {
            const existingFilter = updatedFilters[existingFilterIndex];
            const valueIndex = existingFilter.items.indexOf(value);
            if (valueIndex === -1) existingFilter.items.push(value);
            else existingFilter.items.splice(valueIndex, 1);
            if (existingFilter.items.length === 0) updatedFilters.splice(existingFilterIndex, 1);
        }
        setSelectedFilters(updatedFilters);
    };

    const removeSelected = (item: string) => {
        const updatedFilters = selectedFilters.map((filter) => ({
            ...filter,
            items: filter.items.filter((x) => x !== item),
        })).filter((filter) => filter.items.length > 0);

        setSelectedFilters(updatedFilters);
    };

    return(
        <div className='flex flex-col gap-y-5 w-full h-full'>
            <ProjectsSectionFilters filters={filters} addSelected={addSelected} getSelected={getSelected} lang={lang} />
            <SelectedFiltersList title={lang === "en" ? "Selected Filters" : "Filtros Seleccionados"}
                selectedFilters={selectedFilters} removeSelectedFilter={removeSelected}/>
            <section className='w-full max-h-full h-fit bg-white p-5 rounded-xl'>
                a
            </section>
        </div>
    )
}