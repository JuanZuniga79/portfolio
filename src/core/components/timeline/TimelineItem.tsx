import type {ITimelineCard} from "@core/types/ITimeline.ts";
import {type ReactNode, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import Date from "@core/assets/react-svg/Date"
import {Button} from "@core/components/ui/button.tsx";
import {ChevronDown, ChevronUp} from "lucide-react";

interface Props{
    index:number;
    data: ITimelineCard
    children: ReactNode
    lang: string
}

export default function TimelineItem({index, data, children, lang}:Props){

    const [open, setOpen] = useState<boolean>(false);

    const formatDate = (date: Date) => {
        return new Intl.DateTimeFormat(lang, { dateStyle: 'long' }).format(date);
    };

    const getStatus = () => {
        const {status} = data;
        const trueValue = lang === 'en' ? 'Finished' : 'Terminado'
        const falseValue = lang === 'en' ? 'In Course' : 'En Curso'
        return status ? trueValue : falseValue;
    }

     return (
         <div className={`w-full h-fit flex items-center justify-evenly`}>
             {index % 2 !== 0 && (
                 <>
                     <div className='w-[45%]'/>
                     <figure className='w-5 h-5 border-4 border-sky-200 rounded-full bg-blue-400'/>
                 </>
             )}
             <div className='bg-white dark:bg-gray-800 border-[1px] rounded-lg relative w-[45%] text-sm'>
                 <figure
                     className={` absolute -top-4 -right-4 px-3 py-1.5 rounded-2xl text-white
                            ${data.status ? 'bg-green-800':'bg-amber-800'}
                        `}>
                     {getStatus()}
                 </figure>
                 <div className="relative p-6 flex flex-col gap-5">
                     <AnimatePresence>
                         <motion.div
                             key={`header-${index}`}
                             initial={{opacity: 0}}
                             animate={{opacity: 1}}
                             exit={{opacity: 0}}
                             className='flex flex-col gap-y-2'
                         >
                             <h3 className="text-xl font-medium mb-2">{data.title}</h3>
                             <div className="flex items-center text-base gap-2 text-gray-600 dark:text-gray-400">
                                 <img src={data.subtitleIcon} alt='subtitle icon' width={32} height={32}
                                      className='w-6 h-6 select-none'/>
                                 <span>{data.subtitle}</span>
                             </div>
                             <div
                                 className="flex items-center gap-2 text-base text-gray-600 dark:text-gray-400">
                                 <figure className='w-6 h-6 text-blue-500 dark:text-gray-400'>
                                     <Date/>
                                 </figure>
                                 <span>{formatDate(data.date[0])} - {formatDate(data.date[1])}</span>
                             </div>
                         </motion.div>
                         {open && (
                             <motion.div
                                 key={`content-${index}`}
                                 initial={{opacity: 0, height: 0, zIndex: -10}}
                                 animate={{opacity: 1, height: 'auto', zIndex: 0}}
                                 exit={{opacity: 0, height: 0, zIndex: -10}}
                                 transition={{duration: 0.4}}
                             >
                                 <div className='py-5 w-full flex flex-col gap-y-5'>
                                     <ul className='pl-6'>
                                         {data.description.map((element, index) => (
                                             <li className='list-disc font-light whitespace-pre-line' key={index}>
                                                 {element}
                                             </li>
                                         ))}
                                     </ul>
                                     <ul className='flex items-center justify-evenly gap-2 flex-wrap'>
                                         {children}
                                     </ul>
                                 </div>
                             </motion.div>
                         )}
                     </AnimatePresence>
                     <Button
                         variant="ghost"
                         size="default"
                         className="w-full justify-center hover:bg-blue-500 hover:text-white
                         dark:hover:bg-blue-900/30 outline-none focus-visible:ring-0"
                         onClick={() => setOpen(!open)}
                         aria-expanded={open}
                         aria-controls={`content-${index}`}
                     >
                         {open ?
                             (<>Less <ChevronUp className="ml-2 h-4 w-4"/></>)
                             :
                             (<>More <ChevronDown className="ml-2 h-4 w-4"/></>)}
                     </Button>
                 </div>
             </div>
             {index % 2 === 0 && (
                 <>
                     <figure className='w-5 h-5 border-4 border-sky-200 rounded-full bg-blue-400'/>
                     <div className='w-[45%]'/>
                 </>
             )}
         </div>
     )
}