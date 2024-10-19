export interface ITechnology{
    name: string
    version: string
    from: string
    frequency: string
    activity: number
}

export default interface IHardSkill{
    section: string
    elements: ITechnology[]
}