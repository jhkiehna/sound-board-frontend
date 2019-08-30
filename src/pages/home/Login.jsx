import React from 'react';

import * as S from './styles';

const Login = () => {
  const [formValues, setFormValues] = React.useState({
    username: '',
    password: '',
  });

  const handleChange = field => event => {
    setFormValues({ ...formValues, [field]: event.target.value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    await fetch('http://localhost:8000/auth/sign-in', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        name: formValues.username,
        password: formValues.password,
      }),
    })
      .then(response => response.json())
      .then(json => console.log(json));
  };

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
