import React, { createContext, useState } from 'react';

const StoreContext = createContext({ signed: true });

export const StoreProvider = ({ children }) => {
  const [action, setAction] = useState();
  const [name, setName] = useState();

  return (
    <StoreContext.Provider value={{ action, setAction, name, setName }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
