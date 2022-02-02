import { nanoid } from 'nanoid';
import Cookies from 'js-cookie';
import { NextRouter } from 'next/router';

export const guestLogin = (router: NextRouter) => {
  const token = nanoid();
  Cookies.set('token', token);
  router.push('/home');
};
