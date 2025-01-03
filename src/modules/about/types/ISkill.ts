export interface ISkillSection {
  title: string;
  skills: ISkill[];
}

export interface ISkill {
  name: string;
  projects: number;
  frequency: number;
  icon: any;
  colors: string[];
}