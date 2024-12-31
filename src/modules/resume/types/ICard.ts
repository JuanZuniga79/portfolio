export default interface ICard {
    title: string;
    subtitle: string;
    from: string;
    until: string;
    status: boolean;
    details: string[];
    href?: string;
}