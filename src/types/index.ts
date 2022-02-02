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
  maxHeight: number;
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
  positionX: number;
  positionY: number;
}

export interface Captions {
  topCaption: Caption;
  bottomCaption: Caption;
}
