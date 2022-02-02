import { GetServerSidePropsContext, NextPage } from 'next';
import React from 'react';
import nookies from 'nookies';
import Meme from '../components/Meme';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { Grid, Button } from '@mui/material';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: '100vh',
  },
}));

const Home: NextPage = () => {
  const classes = useStyles();
  const router = useRouter();
  return (
    <Grid
      container
      className={classes.root}
      direction='row'
      justifyContent='space-around'
      alignItems='center'
    >
      <h1>Meme Generator</h1>
      <Button
        variant='contained'
        onClick={() => {
          Cookies.remove('token');
          router.push('/');
        }}
      >
        Logout
      </Button>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}></Grid>

      <Grid item xs={12}>
        <Meme />
      </Grid>
    </Grid>
  );
};

export default Home;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const cookies = nookies.get(ctx);
  const token = cookies.token;

  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }

  return {
    props: {},
  };
};
