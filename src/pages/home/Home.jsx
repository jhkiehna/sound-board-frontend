import React from 'react';
import { ArrowDownward } from '@material-ui/icons';

import Main from '../../components/main/Main';
import Login from './Login';
import Register from './Register';

const Home = () => {
  return (
    <Main title="Login">
      <Login />

      <h3>Or create an account below</h3>
      <ArrowDownward />

      <Register />
    </Main>
  );
};

export default Home;
