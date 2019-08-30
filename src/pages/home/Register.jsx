import React from 'react';

import * as S from './styles';

const Register = () => {
  const [formValues, setFormValues] = React.useState({
    username: '',
    password: '',
    password_confirmation: '',
  });

  const handleChange = field => event => {
    setFormValues({ ...formValues, [field]: event.target.value });
  };

  return (
    <S.Form noValidate autoComplete="off" style={{ maxWidth: '50rem' }}>
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
        style={{ width: '50%' }}
      />
      <S.FormField
        label="Confirm Password"
        value={formValues.password_confirmation}
        onChange={handleChange('password_confirmation')}
        margin="normal"
        variant="filled"
        type="password"
        style={{ width: '50%' }}
      />

      <S.SubmitButton variant="contained" size="large" fullWidth={true} type="submit">
        Create Account
      </S.SubmitButton>
    </S.Form>
  );
};

export default Register;
