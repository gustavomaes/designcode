import React, { createContext, useState } from 'react';

const StoreContext = createContext({ signed: true });

export const StoreProvider = ({ children }) => {
  const [action, setAction] = useState();
  const [name, setName] = useState();
  const [cardOpen, setCardOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  return (
    <StoreContext.Provider
      value={{
        action,
        setAction,
        name,
        setName,
        cardOpen,
        setCardOpen,
        loginOpen,
        setLoginOpen,
        isLogged,
        setIsLogged,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
