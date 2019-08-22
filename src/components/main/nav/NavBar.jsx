import React from 'react';
import AppBar from '@material-ui/core/AppBar';

import * as S from './styles';

const NavBar = () => {
  return (
    <nav>
      <AppBar>
        <S.MaterialToolbar>
          <S.MaterialTypography>
            <S.RouterLink to="/">SoundBoard</S.RouterLink>
          </S.MaterialTypography>
          <S.MaterialButton color="inherit">Login</S.MaterialButton>
        </S.MaterialToolbar>
      </AppBar>
    </nav>
  );
};

export default NavBar;
