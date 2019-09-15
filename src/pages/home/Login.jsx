import React from 'react';
import { Redirect } from 'react-router-dom';

import { postRequest } from '../../utils/api';
import Storage from '../../utils/storage';
import { AuthContext } from '../../utils/AuthContext';

import * as S from './styles';

const Login = () => {
  const [authenticated, setAuthenticated] = React.useState(AuthContext);

  const [formValues, setFormValues] = React.useState({
    username: '',
    password: '',
  });

  const handleChange = field => event => {
    setFormValues({ ...formValues, [field]: event.target.value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    postRequest('http://localhost:8000/auth/sign-in', {
      name: formValues.username,
      password: formValues.password,
    }).then(result => {
      if (result.errors) {
        console.error(result.errors);
        return;
      }

      Storage.login({
        username: result.data.name,
        apiToken: result.data.api_token,
      });

      setAuthenticated(true);
    });
  };

  if (authenticated) {
    return <Redirect to="/boards" />;
  }

  return (
    <S.Form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <S.FormField
        label="Username"
        value={formValues.username}
        onChange={handleChange('username')}
        margin="normal"
        variant="filled"
        fullWidth={true}
      />
      <S.FormField
        label="Password"
        value={formValues.password}
        onChange={handleChange('password')}
        margin="normal"
        variant="filled"
        type="password"
        fullWidth={true}
      />

      <S.SubmitButton variant="contained" size="large" fullWidth={true} type="submit">
        Log In
      </S.SubmitButton>
    </S.Form>
  );
};

export default Login;
