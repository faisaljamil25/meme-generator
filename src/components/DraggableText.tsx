// @ts-nocheck
import React from 'react';
import { Text, Transformer } from 'react-konva';

interface DraggableTextProps {
  shapeProps: any;
  isSelected: any;
  onSelect: any;
  onChange: any;
}

const DraggableText: React.FC<DraggableTextProps> = ({
  shapeProps,
  isSelected,
  onSelect,
  onChange,
}) => {
  const shapeRef = React.useRef();
  const trRef = React.useRef();

  React.useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRef.current?.nodes([shapeRef.current]);
      trRef.current?.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <>
      <Text
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        fillAfterStrokeEnabled
        strokeScaleEnabled={false}
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={(e) => {
          const node = shapeRef.current;
          const fontSize = node.fontSize();
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            fontSize: fontSize,
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};

export default DraggableText;
