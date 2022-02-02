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
