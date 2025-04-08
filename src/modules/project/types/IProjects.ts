export default interface IProjects {
    title: string;
    date: string;
    done: boolean;
    type: string;
    short_description: string;
    description: string;
    technologies: string[];
    repository?: string;
    live?: string;
    coverUrl?: string;
}