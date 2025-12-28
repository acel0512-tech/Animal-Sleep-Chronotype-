export enum AnimalType {
  DOLPHIN = 'DOLPHIN',
  LION = 'LION',
  BEAR = 'BEAR',
  WOLF = 'WOLF',
}

export interface QuestionPart1 {
  id: number;
  text: string;
}

export interface OptionPart2 {
  text: string;
  points: number;
}

export interface QuestionPart2 {
  id: number;
  text: string;
  options: OptionPart2[];
}

export interface AnimalResult {
  type: AnimalType;
  name: string;
  percentage: string;
  description: string[];
  schedule: string;
  personality: string;
  icon: string; // Emoji or icon name
  color: string;
}