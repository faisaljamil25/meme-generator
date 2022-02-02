import React from 'react';
import { Stage, Layer, Image, Text } from 'react-konva';
import Form from './Form';
import { Meme, MemeImage, Captions } from '../types';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';

export interface CanvasProps {
  memes: Meme[] | undefined;
  memeImage: MemeImage | undefined;
  setMemeImage: React.Dispatch<React.SetStateAction<MemeImage | undefined>>;
  captions: Captions | undefined;
  setCaptions: React.Dispatch<React.SetStateAction<Captions | undefined>>;
  selectRandomMeme: (memes: Meme[]) => void;
}

const Canvas: React.FC<CanvasProps> = ({
  memes,
  memeImage,
  setMemeImage,
  captions,
  setCaptions,
  selectRandomMeme,
}) => {
  const layerRef = React.useRef(null);
  const stageRef = React.useRef(null);

  const handledownload = (event: any) => {
    event.preventDefault();
    // @ts-ignore
    const url = stageRef.current.toDataURL();
    const link = document.createElement('a');
    link.download = 'meme.png';
    link.href = url;
    link.click();
  };
  return (
    <Grid container spacing={2} justifyContent='center' alignItems='center'>
      <Grid item xs={4}>
        <Form
          memes={memes}
          memeImage={memeImage}
          setMemeImage={setMemeImage}
          captions={captions}
          setCaptions={setCaptions}
          selectRandomMeme={selectRandomMeme}
          handleDownload={handledownload}
        />
      </Grid>
      <Grid item xs={8}>
        <Box>
          <Stage
            width={memeImage?.width}
            height={memeImage?.height}
            ref={stageRef}
            onContentMouseover
          >
            <Layer ref={layerRef}>
              <Image x={0} y={0} image={memeImage?.image} alt='meme-image' />
              <Text
                {...captions?.topCaption}
                fillAfterStrokeEnabled
                strokeScaleEnabled={false}
              />
              <Text
                {...captions?.bottomCaption}
                fillAfterStrokeEnabled
                strokeScaleEnabled={false}
              />
            </Layer>
          </Stage>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Canvas;
