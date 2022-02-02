export const getRandomIndex = (length: number) => {
  return Math.floor(Math.random() * length);
};

interface LoaderProps {
  src: string;
}

export const imageLoader = ({ src }: LoaderProps) => {
  const relativeSrc = (src: string) => src.split('/').pop();
  return `https://i.imgflip.com/${relativeSrc(src)}`;
};

export const defaultTopCaption = {
  id: '0',
  text: '',
  fill: '#000000',
  stroke: '#FFFFFF',
  strokeWidth: 1,
  fontSize: 30,
  positionX: 0,
  positionY: 0,
};

export const defaultBottomCaption = {
  id: '1',
  text: '',
  fill: '#000000',
  stroke: '#FFFFFF',
  strokeWidth: 1,
  fontSize: 30,
  positionX: 10000,
  positionY: 100000,
};
