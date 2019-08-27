import React from 'react';

import NavBar from './nav/NavBar';

import * as S from './styles';

const Main = props => {
  const { title, children } = props;

  return (
    <>
      <NavBar />

      <S.Main>
        <h2 style={{ textAlign: 'center' }}>{title}</h2>
        {children}
      </S.Main>
    </>
  );
};

export default Main;
