import firebaseSDK from '.';
import Cookies from 'js-cookie';
import { NextRouter } from 'next/router';

export const googleLogin = (router: NextRouter) => {
  const provider = new firebaseSDK.auth.GoogleAuthProvider();
  firebaseSDK
    .auth()
    .signInWithPopup(provider)
    .then(async (response) => {
      const token = await response.user?.getIdToken();
      if (token) Cookies.set('token', token);
      router.push('/home');
    })
    .catch((e) => {
      console.log(e.message);
    });
};
