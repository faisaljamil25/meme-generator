import React from 'react';
import { getMemes } from '../api';
import { Meme, Captions, MemeImage } from '../types';
import { getRandomIndex } from '../utils';
import Canvas from './Canvas';

const MemeComponent = () => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [memes, setMemes] = React.useState<Meme[]>([]);
  const [memeImage, setMemeImage] = React.useState<MemeImage>();
  const [captions, setCaptions] = React.useState<Captions>();

  const selectRandomMeme = (memes: Meme[]) => {
    if (memes.length === 0) return;
    const randomMeme = memes[getRandomIndex(memes.length)];
    const image = new Image();
    image.src = randomMeme.url;
    image.crossOrigin = 'anonymous';
    setMemeImage({
      id: randomMeme.id,
      name: randomMeme.name,
      width: randomMeme.width,
      height: randomMeme.height,
      maxHeight: randomMeme.height,
      url: randomMeme.url,
      image: image,
    });
  };

  const fetchMemes = async () => {
    const { data } = await getMemes();
    const res = data.data.memes;
    setMemes(res);
    selectRandomMeme(res);
    setLoading(false);
  };

  React.useEffect(() => {
    fetchMemes().catch(console.error);
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <Canvas
      memes={memes}
      memeImage={memeImage}
      setMemeImage={setMemeImage}
      captions={captions}
      setCaptions={setCaptions}
      selectRandomMeme={selectRandomMeme}
    />
  );
};

export default MemeComponent;
