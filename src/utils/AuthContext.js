import React from 'react';

export const AuthContext = React.createContext([null, () => {}]);

export const AuthProvider = props => {
  const [authenticated, setAuthenticated] = React.useState(false);

  return (
    <AuthContext.Provider value={[authenticated, setAuthenticated]}>
      {props.children}
    </AuthContext.Provider>
  );
};
