import React from 'react';
import AppBar from '@material-ui/core/AppBar';

import * as S from './styles';

const NavLinks = () => {
  const isLoggedIn = false;

  if (isLoggedIn)
    return (
      <>
        <S.NavigationLink to="/boards" activeClassName="matched">
          Boards
        </S.NavigationLink>
        <S.NavigationLink to="/clips" activeClassName="matched">
          Clips
        </S.NavigationLink>
        <S.Divider />
        <S.NavigationLink to="/logout" activeClassName="matched">
          Logout
        </S.NavigationLink>
      </>
    );

  return <S.Placeholder>Create Something</S.Placeholder>;
};

const NavBar = () => {
  return (
    <nav>
      <AppBar>
        <S.MaterialToolbar>
          <S.MaterialTypography>
            <S.RouterLink to="/">SoundBoard</S.RouterLink>
          </S.MaterialTypography>

          <NavLinks />
        </S.MaterialToolbar>
      </AppBar>
    </nav>
  );
};

export default NavBar;
