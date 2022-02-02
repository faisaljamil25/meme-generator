export interface Meme {
  id: string;
  name: string;
  url: string;
  width: number;
  height: number;
  box_count: number;
}

export interface Caption {
  id: string;
  text: string;
  fill: string;
  stroke: string;
  strokeWidth: number;
  fontSize: number;
  positionX: number;
  positionY: number;
}
