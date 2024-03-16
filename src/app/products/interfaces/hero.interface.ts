export enum Color {
  Red,
  Black,
  Green,
  Blue,
}

export interface Hero {
  name: string;
  canFly: boolean;
  color: Color;
}
