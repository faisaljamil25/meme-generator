import React from 'react';
import Text from './Text';
import { Stage, Layer, Image } from 'react-konva';
import Form from './Form';
import { Meme, MemeImage, Captions } from '../types';

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

  const handleExport = (event: any) => {
    event.preventDefault();
    // const uri = stageRef.current.toDataURL();
    // var link = document.createElement('a');
    // link.download = 'meme.png';
    // link.href = uri;
    // link.click();
  };

  return (
    <div className='memeRoot'>
      <Form
        memes={memes}
        memeImage={memeImage}
        setMemeImage={setMemeImage}
        captions={captions}
        setCaptions={setCaptions}
        selectRandomMeme={selectRandomMeme}
        handleDownload={handleExport}
      />
      <div className='canvas inverted'>
        <Stage
          width={memeImage?.width}
          height={memeImage?.height}
          ref={stageRef}
          onContentMouseover
        >
          <Layer ref={layerRef}>
            <Image x={0} y={0} image={memeImage?.image} alt='meme-image' />
            <Text shapeProps={captions?.topCaption} />
            <Text shapeProps={captions?.bottomCaption} />
          </Layer>
        </Stage>
      </div>
    </div>
  );
};

export default Canvas;
