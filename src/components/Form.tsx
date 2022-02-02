import React from 'react';
import {
  Button,
  TextField,
  Tooltip,
  Grid,
  Box,
  Typography,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import { CanvasProps } from './Canvas';
import { Captions } from '../types';
import firebase from 'firebase/app';
import firebaseSDK from '../firebase';

interface FormProps extends CanvasProps {
  handleDownload: (event: any) => void;
}

const Form: React.FC<FormProps> = ({
  memes,
  memeImage,
  setMemeImage,
  captions,
  setCaptions,
  selectRandomMeme,
  handleDownload,
}) => {
  const handleChange = (event: any, type: string) => {
    const key: string = type;
    switch (key) {
      case 'topCaption':
        // @ts-ignore
        setCaptions((prevState: Captions) => ({
          ...prevState,
          topCaption: {
            ...prevState?.topCaption,
            text: event.target.value,
          },
        }));
        break;
      case 'bottomCaption':
        // @ts-ignore
        setCaptions((prevState: Captions) => ({
          ...prevState,
          bottomCaption: {
            ...prevState?.bottomCaption,
            text: event.target.value,
          },
        }));
        break;
    }
  };

  return (
    <Grid container justifyContent='center' alignItems='center'>
      <Grid item xs={10} mt={4}>
        {/* <Box mb={4} display='flex' justifyContent='center'>
          <Typography variant='h5' align='center' mt={4} gutterBottom>
            Welcome {firebaseSDK.auth().currentUser?.displayName}
          </Typography>
        </Box> */}
        <Box mb={4} display='flex' justifyContent='center'>
          <TextField
            id={captions?.topCaption.id}
            value={captions?.topCaption.text}
            label='Top Caption'
            variant='outlined'
            onChange={(e) => handleChange(e, 'topCaption')}
          />
        </Box>
        <Box mb={4} display='flex' justifyContent='center'>
          <TextField
            id={captions?.bottomCaption.id}
            value={captions?.bottomCaption.text}
            label='Bottom Caption'
            variant='outlined'
            onChange={(e) => handleChange(e, 'bottomCaption')}
          />
        </Box>
        {/* <Box>
        <Tooltip title='Text Color' placement='top-start' arrow>
          <input type='color' name='Text Color' />
        </Tooltip>
        <Tooltip title='Border Color' placement='top-start' arrow>
          <input type='color' name='Border Color' />
        </Tooltip>
      </Box> */}
        <Box mb={2} display='flex' justifyContent='center'>
          <Button
            variant='contained'
            color='secondary'
            startIcon={<ShuffleIcon />}
            onClick={() => {
              memes && selectRandomMeme(memes);
            }}
          >
            Change Meme
          </Button>
        </Box>
        <Box mb={2} display='flex' justifyContent='center'>
          <Button
            variant='contained'
            color='secondary'
            startIcon={<DownloadIcon />}
            onClick={handleDownload}
          >
            Download
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Form;
