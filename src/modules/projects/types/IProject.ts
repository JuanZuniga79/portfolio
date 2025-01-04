export default interface IProject {
    id: number;
    name: string;
    area: string;
    type: string;
    date: string;
    commits: string;
    state: state;
    technology: ITechnology[];
    description: string;
    markdownUrl: string;
    repositoryUrl: string;
}

interface ITechnology {
    id: number;
    name: string;
    category: category;
    icon: string;
}

enum state{
    "in progress",
    "done",
    "canceled",
}

enum category{
    "frontend",
    "backend",
}