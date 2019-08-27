import styled from 'styled-components';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export const MaterialToolbar = styled(Toolbar)`
  background-color: var(--secondary-bg-color);
`;

export const MaterialTypography = styled(Typography)`
  flex-grow: 1;
`;

export const RouterLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-text-color);
  text-decoration: none;

  :hover {
    color: var(--primary-color);
  }
`;

export const MaterialButton = styled(Button)`
  :hover {
    color: var(--primary-color);
  }
`;

export const Divider = styled.div`
  border-right: 2px solid var(--primary-text-color);
  margin: 0 2em;
  width: 2px;
  height: 1em;
`;

export const Placeholder = styled.p`
  font-style: italic;
  color: #555;
`;
