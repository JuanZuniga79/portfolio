export default interface ITimeline{
  type: "education" | "experience",
  title: string,
  company: string,
  description: string,
  achievements: string[],
  technologies: string[],
  start: Date,
  end?: Date,
}