import {enHeaderItems, esHeaderItems} from "@core/data/headerItems.ts";

export default async function getHeaderItems(lang: string){
  return lang === 'en' ? enHeaderItems : enHeaderItems;
}