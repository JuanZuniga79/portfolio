import type {ITimelineCard} from "@core/types/ITimeline.ts";

export default interface IExperienceTimelineCard extends ITimelineCard {
    technologies: string[];
}