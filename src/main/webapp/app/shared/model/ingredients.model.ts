export const enum Language {
  ENGLISH = 'ENGLISH',
  JAPANESE = 'JAPANESE'
}

export interface IIngredients {
  id?: number;
  year?: number;
  month?: number;
  date?: number;
  name?: string;
  description?: string;
  images?: string;
  cuisineName?: string;
  cuisineDescription?: string;
  cuisineImages?: string;
  language?: Language;
}

export const defaultValue: Readonly<IIngredients> = {};
