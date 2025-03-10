import type IFilter from "./IFilter.ts";

export default interface IProject{
    name: string,
    category: string,
    description: string,
    overview: string,
    features: string[],
    skills: IFilter[],
    tags: string[],
    coverUrl: string;
    mdDocsUrl: string;
    repo?: string,
    live?: string;
    lastUpdate?: Date;
    stars?: number,
    forks?: number,
}