import {type AnyEntryMap, getCollection} from "astro:content";

export async function fetchCollection<T>(name: keyof AnyEntryMap, lang: string){
    if(name.length < 1) return;
    const collection = await getCollection(name);
    if(!collection) return;
    return (async () => {
        const items: {data: T, body: string}[] = [];
        for await (const item of collection) {
            if (!item.id.includes(lang)) continue;
            items.push({ data: item.data as T, body: item.body || ""});
        }
        return items;
    })();
}