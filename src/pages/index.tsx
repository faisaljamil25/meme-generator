import { NextPage } from 'next';
import { Button, Grid, Box } from '@mui/material';
import { googleLogin } from '../firebase/googleLogin';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { useRouter } from 'next/router';

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
    <Grid container className={classes.home}>
      <Grid item xs={12}>
        <Box mt={4}>
          <h1 style={{ textAlign: 'center' }}>MEME GENERATOR</h1>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent='center' alignItems='center'>
          <Box mt={-40}>
            <Button variant='contained' onClick={() => googleLogin(router)}>
              Google Login
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Index;
