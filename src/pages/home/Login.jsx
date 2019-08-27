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

  return (
    <S.Form noValidate autoComplete="off">
      <S.FormField
        label="Username"
        value={formValues.name}
        onChange={handleChange('name')}
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

      <S.SubmitButton variant="contained" size="large" fullWidth={true}>
        Log In
      </S.SubmitButton>
    </S.Form>
  );
};

export default Login;
