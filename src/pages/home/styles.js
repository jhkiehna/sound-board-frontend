import styled from 'styled-components';

import { TextField, Button } from '@material-ui/core';

export const Form = styled.form`
  max-width: 20rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5rem;
`;

export const FormField = styled(TextField)`
  input {
    color: var(--primary-text-color);
  }

  .MuiFilledInput-underline:after {
    border-color: var(--primary-color);
  }

  label {
    color: var(--primary-color) !important;
  }
`;

export const SubmitButton = styled(Button)`
  color: var(--primary-text-color) !important;
  background-color: var(--primary-color) !important;
`;
