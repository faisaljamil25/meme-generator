import React from 'react';
import { Button, TextField, Tooltip } from '@mui/material';
import { Box } from '@mui/system';
import DownloadIcon from '@mui/icons-material/Download';
import ShuffleIcon from '@mui/icons-material/Shuffle';

const Form = () => {
  return (
    <Box>
      <Box>
        <TextField id='outlined-basic' label='Top Caption' variant='outlined' />
      </Box>
      <Box>
        <TextField
          id='outlined-basic'
          label='Bottom Caption'
          variant='outlined'
        />
      </Box>
      <Box>
        <Tooltip title='Text Color' placement='top-start' arrow>
          <input type='color' name='Text Color' />
        </Tooltip>
        <Tooltip title='Border Color' placement='top-start' arrow>
          <input type='color' name='Border Color' />
        </Tooltip>
      </Box>
      <Box>
        <Button variant='contained' startIcon={<ShuffleIcon />}>
          Change Meme
        </Button>
        <Button variant='contained' startIcon={<DownloadIcon />}>
          Download
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
