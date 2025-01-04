import type IProjectFilter from "@projects/types/IProjectFilter.ts";

interface Props{
    selectedFilters: IProjectFilter[]
    removeSelectedFilter: (item: string) => void
    title: string
}

export default function SelectedFiltersList({selectedFilters, removeSelectedFilter, title}: Props) {
    return(
        <div className='flex flex-col gap-y-2 w-full'>
            <h4 className='text-lg italic'>{title}</h4>
            <ul className='flex items-center gap-4 flex-wrap'>
                {selectedFilters.map((item) => (
                    <>
                        {item.items.map((label, i) => (
                            <li onClick={() => removeSelectedFilter(label)}
                                key={i}
                                className='flex items-center gap-x-2 text-sm bg-white rounded-2xl px-4 py-1
                                cursor-pointer'>
                                <img src={item.icon} alt={`${label} icon`} className='w-4 h-4'/>
                                <span className='capitalize text-base'>{label}</span>
                                <figure className='font-light text-gray-500'>x</figure>
                            </li>
                        ))}
                    </>
                ))}
            </ul>
        </div>
    )
}