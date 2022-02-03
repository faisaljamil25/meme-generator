export const getRandomIndex = (length: number) => {
  return Math.floor(Math.random() * length);
};

export const getSize = (width: number, height: number, maxHeight: number) => {
  let newHeight = height;
  let newWidth = width;
  if (height > maxHeight) {
    let ratio = maxHeight / height;
    newWidth = width * ratio;
    newHeight = maxHeight;
  }
  return { newWidth, newHeight };
};
export const defaultTopCaption = {
  id: '0',
  text: '',
  fill: '#000000',
  stroke: '#FFFFFF',
  strokeWidth: 1,
  fontSize: 30,
  x: 150,
  y: 40,
};

export const defaultBottomCaption = {
  id: '1',
  text: '',
  fill: '#000000',
  stroke: '#FFFFFF',
  strokeWidth: 1,
  fontSize: 30,
  x: 150,
  y: 250,
};
