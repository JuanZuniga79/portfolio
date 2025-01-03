export interface ISkillSection {
  title: string;
  skills: ISkill[];
}

export interface ISkill {
  name: string;
  projects: number;
  frecuency: number;
  icon: any;
}