import React, { createContext, useState } from 'react';

const StoreContext = createContext({ signed: true });

export const StoreProvider = ({ children }) => {
  const [action, setAction] = useState();

  return (
    <StoreContext.Provider value={{ action, setAction }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
