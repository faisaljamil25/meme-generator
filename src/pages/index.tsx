import type { NextPage } from 'next';
import Meme from '../components/Meme';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { Grid } from '@mui/material';
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: '100vh',
  },
}));

const Home: NextPage = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <h1 style={{ textAlign: 'center' }}>Meme Generator</h1>
      </Grid>
      <Grid item xs={12}>
        <Meme />
      </Grid>
    </Grid>
  );
};

export default Home;
