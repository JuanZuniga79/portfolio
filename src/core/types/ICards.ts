export interface ICard {
  icon: any;
  title: string;
  subtitle: string;
  level?: number;
  description?: string;
  onClick?: () => void;
  buttonText?: string;
  class: string[]
}

export interface IBasicCard{
  title: string;
  description: string;
  icon: any
}