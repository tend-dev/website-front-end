export interface IPoint {
  text: string;
  clarification?: string;
}

export interface IPlan {
  header: string;
  label?: string;
  points: IPoint[];
  percents: number;
}
