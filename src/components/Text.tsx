import React from 'react';
import { Text } from 'react-konva';
import { Caption } from '../types';
interface TextComponentProps {
  shapeProps: Caption | undefined;
}
const TextComponent: React.FC<TextComponentProps> = ({ shapeProps }) => {
  return (
    <Text {...shapeProps} fillAfterStrokeEnabled strokeScaleEnabled={false} />
  );
};

export default TextComponent;
