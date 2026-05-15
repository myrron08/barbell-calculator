export type PlateWeight =
  | 25
  | 20
  | 15
  | 10
  | 5
  | 2.5
  | 1.25
  | 0.5
  | 0.25;

export interface Plate {
  weight: PlateWeight;
  color: string;
  width: number;
  diameter: number;
}