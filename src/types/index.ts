export interface Meme {
  id: string;
  name: string;
  url: string;
  width: number;
  height: number;
  box_count: number;
}

export interface MemeImage {
  id: string;
  name: string;
  width: number;
  height: number;
  url: string;
  image: HTMLImageElement;
}

export interface Caption {
  id: string;
  text: string;
  fill: string;
  stroke: string;
  strokeWidth: number;
  fontSize: number;
  x: number;
  y: number;
}

export interface Captions {
  topCaption: Caption;
  bottomCaption: Caption;
}
