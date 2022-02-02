import { NextPage } from 'next';
import { Button, Grid, Box, Typography } from '@mui/material';
import { googleLogin } from '../firebase/googleLogin';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { guestLogin } from '../firebase/guestLogin';
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const useStyles = makeStyles((theme: Theme) => ({
  home: {
    minHeight: '100vh',
    backgroundColor: '#ffffff',
    backgroundImage: `url('/bg.svg')`,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
  },
}));

const Index: NextPage = () => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const router = useRouter();
  const classes = useStyles();

  React.useEffect(() => setLoading(false), []);

  if (loading) return <CircularProgress color='secondary' />;

  return (
    <Box className={classes.home}>
      <Grid container spacing={2}>
        <Grid item xs={12} mb={10}>
          <Typography variant='h4' align='center' mt={4} gutterBottom>
            MEME GENERATOR
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box display='flex' justifyContent='center' mb={2}>
            <Button
              variant='contained'
              color='secondary'
              onClick={() => googleLogin(router)}
            >
              Google Login
            </Button>
          </Box>
          <Box display='flex' justifyContent='center'>
            <Button
              variant='contained'
              color='secondary'
              onClick={() => guestLogin(router)}
            >
              Guest Login
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Index;
