import React from 'react';
import AppBar from '@material-ui/core/AppBar';

import * as S from './styles';

const NavLinks = () => {
  const isLoggedIn = false;

  if (isLoggedIn)
    return (
      <>
        <S.MaterialButton color="inherit">Boards</S.MaterialButton>
        <S.MaterialButton color="inherit">Clips</S.MaterialButton>
        <S.Divider />
        <S.MaterialButton color="inherit">Logout</S.MaterialButton>
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
