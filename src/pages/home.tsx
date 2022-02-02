import { GetServerSidePropsContext, NextPage } from 'next';
import React from 'react';
import nookies from 'nookies';
import Meme from '../components/Meme';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { Grid, Button, Box, Typography } from '@mui/material';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import CircularProgress from '@mui/material/CircularProgress';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: '100vh',
  },
}));

const Home: NextPage = () => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const router = useRouter();
  const classes = useStyles();

  React.useEffect(() => setLoading(false), []);

  if (loading) return <CircularProgress color='secondary' />;

  return (
    <Box className={classes.root}>
      <Grid container>
        <Grid
          item
          container
          alignItems='center'
          justifyContent='space-around'
          xs={12}
          mt={2}
          mb={4}
        >
          <Typography variant='h4' align='center'>
            Meme Generator
          </Typography>
          <Button
            variant='contained'
            color='secondary'
            onClick={() => {
              Cookies.remove('token');
              router.push('/');
            }}
          >
            Logout
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Meme />
        </Grid>
      </Grid>
    </Box>
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
