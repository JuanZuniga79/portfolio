import {Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger} from "@core/components/ui/menubar.tsx";
import type IHeaderItems from "@core/types/IHeaderItems.ts";

export default function Nav({data, lang}: {data: IHeaderItems[], lang: string}){
  return(
    <Menubar className='border-0 shadow-none bg-transparent'>
      {data.map((item:IHeaderItems, index)=>(
        <MenubarMenu key={index}>
          <MenubarTrigger
            className='cursor-pointer text-base data-[state=open]:bg-blue-500 data-[state=open]:text-white
            hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white'>
            {item.label}
          </MenubarTrigger>
          {item.subMenu && (
            <MenubarContent>
              {item.subMenu.map((subItem:IHeaderItems, index)=>(
                <MenubarItem key={index} className='hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white'>
                  <a href={`${lang}${item.url}/${subItem.url}`} className='w-full cursor-pointer'>
                    {subItem.label}
                  </a>
                </MenubarItem>
              ))}
            </MenubarContent>
          )}
        </MenubarMenu>
      ))}
    </Menubar>
  )
}