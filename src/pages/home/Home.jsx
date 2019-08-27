import React from 'react';
import { ArrowDownward } from '@material-ui/icons';

import Main from '../../components/main/Main';
import Login from './Login';

const Home = () => {
  return (
    <Main title="Login">
      <Login />

      <h3>Or create an account right here</h3>
      <ArrowDownward />

      <div>Sign up placeholder</div>
    </Main>
  );
};

export default Home;
