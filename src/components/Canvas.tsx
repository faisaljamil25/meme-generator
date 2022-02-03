import React from 'react';
import { Stage, Layer, Image, Text } from 'react-konva';
import Form from './Form';
import { Meme, MemeImage, Captions, Caption } from '../types';
import { Grid } from '@mui/material';
import DraggableText from './DraggableText';

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
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const [selectedId, setSelectedId] = React.useState<string | undefined>(
    undefined
  );
  const layerRef = React.useRef(null);
  const stageRef = React.useRef(null);

  React.useEffect(() => {
    window.addEventListener('resize', updateWidthAndHeight);
    return () => window.removeEventListener('resize', updateWidthAndHeight);
  });

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  const handledownload = (event: any) => {
    event.preventDefault();
    // @ts-ignore
    const url = stageRef.current.toDataURL();
    const link = document.createElement('a');
    link.download = 'meme.png';
    link.href = url;
    link.click();
  };

  const checkSelected = (event: any) => {
    const clickedOnEmpty = event.target.index === 0;
    if (clickedOnEmpty) {
      setSelectedId(undefined);
    }
  };

  let textArray: Caption[] = [];
  React.useEffect(() => {
    textArray.length = 0;
    if (captions) {
      textArray.push(captions.topCaption);
      textArray.push(captions.bottomCaption);
    }
  }, [captions]);

  return (
    <Grid container justifyContent='center' spacing={2}>
      <Grid item xs={12} md={4}>
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
      <Grid
        item
        container
        xs={12}
        md={8}
        justifyContent='center'
        alignItems='center'
      >
        <Stage
          width={width > 600 ? width * 0.6 : width}
          height={height > 600 ? height * 0.6 : 400}
          ref={stageRef}
          onMouseDown={checkSelected}
          onTouchStart={checkSelected}
          onContentMouseover
        >
          <Layer ref={layerRef}>
            <Image
              x={0}
              y={0}
              image={memeImage?.image}
              alt='meme-image'
              width={width > 600 ? 600 : width}
              height={height > 600 ? height * 0.6 : 400}
            />
            <DraggableText
              key={captions?.topCaption.id}
              shapeProps={captions?.topCaption}
              isSelected={captions?.topCaption.id === selectedId}
              onSelect={() => setSelectedId(captions?.topCaption.id)}
              onChange={(newAttrs: any) => {
                textArray[0] = newAttrs;
              }}
            />
            <DraggableText
              key={captions?.bottomCaption.id}
              shapeProps={captions?.bottomCaption}
              isSelected={captions?.bottomCaption.id === selectedId}
              onSelect={() => setSelectedId(captions?.bottomCaption.id)}
              onChange={(newAttrs: any) => {
                textArray[1] = newAttrs;
              }}
            />
          </Layer>
        </Stage>
      </Grid>
    </Grid>
  );
};

export default Canvas;
