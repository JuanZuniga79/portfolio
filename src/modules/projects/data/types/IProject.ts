import type IMDContent from "../../../../core/data/types/IMDContent";

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
    repository?: string
    collaborators: ICollaborators[]
    content: IMDContent
    documentation: string
}