import React from 'react';
import { getMemes } from '../api';
import { getRandomIndex, imageLoader } from '../utils/getRandomIndex';
import Image from 'next/image';

export interface Meme {
  id: string;
  name: string;
  url: string;
  width: number;
  height: number;
  box_count: number;
}

const Canvas = () => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [memes, setMemes] = React.useState<Meme[]>([]);
  const [currentMeme, setCurrentMeme] = React.useState<Meme | null>(null);

  const selectRandomImage = (memes: Meme[]) => {
    if (memes.length === 0) {
      console.log('null value');
      return;
    }
    const randomMeme = memes[getRandomIndex(memes.length)];
    setCurrentMeme(randomMeme);
  };

  const fetchMemes = async () => {
    const { data } = await getMemes();
    const res = data.data.memes;
    setMemes(res);
    selectRandomImage(res);
    setLoading(false);
  };

  React.useEffect(() => {
    fetchMemes().catch(console.error);
  }, []);

  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      <button onClick={() => selectRandomImage(memes)}>Select Random</button>
      {currentMeme && (
        <Image
          loader={imageLoader}
          src={currentMeme.url}
          width={currentMeme.width}
          height={currentMeme.height}
          alt={currentMeme.name}
          unoptimized={true}
        />
      )}
    </div>
  );
};

export default Canvas;
