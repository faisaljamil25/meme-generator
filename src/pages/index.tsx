import { NextPage } from 'next';
import { Button, Grid, Box, Typography } from '@mui/material';
import { googleLogin } from '../firebase/googleLogin';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { guestLogin } from '../firebase/guestLogin';

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
  const router = useRouter();
  const classes = useStyles();
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
