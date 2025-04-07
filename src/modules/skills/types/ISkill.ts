export default interface ISkill {
    name: string;
    level: number; // 0 - 2 = trainee,  3 - 4 = Beginner, 5 - 6 = Intermediate, 7 - 8 = Advanced, 9 - 10 = expert;
    experience: number; //years
    lastProject: string;
    projects: number;
    usage: string[];
    related: string[];
    learning: number;
    certifications: string[];
    iconSrc: string;
}