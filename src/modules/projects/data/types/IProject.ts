export interface ITechnologies{
    name: string
    icon: any
}

export interface ICollaborators{
    name: string
    profile: string
}

export default interface IProject{
    name: string
    technologies: ITechnologies[]
    public: boolean,
    repository?: string
    cover: string
    collaborators?: ICollaborators[]
    priority: number
    size: "big" | "medium" | "small"
    status: boolean
    id: number
}