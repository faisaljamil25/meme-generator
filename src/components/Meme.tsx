import React from 'react';
import { getMemes } from '../api';
import { Meme, Captions, MemeImage } from '../types';
import {
  defaultBottomCaption,
  defaultTopCaption,
  getRandomIndex,
  getSize,
} from '../utils';
import dynamic from 'next/dynamic';
import CircularProgress from '@mui/material/CircularProgress';

const Canvas = dynamic(() => import('./Canvas'), {
  ssr: false,
});

const MemeComponent = () => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [memes, setMemes] = React.useState<Meme[]>([]);
  const [memeImage, setMemeImage] = React.useState<MemeImage>();
  const [captions, setCaptions] = React.useState<Captions>();

  const selectRandomMeme = (memes: Meme[]) => {
    if (memes.length === 0) return;
    const randomMeme = memes[getRandomIndex(memes.length)];
    const image = new Image();
    const maxHeight = Math.floor(window.innerHeight * 0.6);
    const { newWidth, newHeight } = getSize(
      randomMeme.width,
      randomMeme.height,
      maxHeight
    );
    image.src = randomMeme.url;
    image.crossOrigin = 'anonymous';
    setMemeImage({
      id: randomMeme.id,
      name: randomMeme.name,
      width: newWidth,
      height: newHeight,
      url: randomMeme.url,
      image: image,
    });
    setCaptions({
      topCaption: defaultTopCaption,
      bottomCaption: defaultBottomCaption,
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

  if (loading) return <CircularProgress color='secondary' />;

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
