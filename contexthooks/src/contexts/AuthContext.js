import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthenticateProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleAuth = () => {
    setIsAuthenticated(!isAuthenticated);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, toggleAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthenticateProvider;