import React, { createContext, useState } from 'react';

const StoreContext = createContext({ signed: true });

export const StoreProvider = ({ children }) => {
  const [openMenu, setOpenMenu] = useState();

  return (
    <StoreContext.Provider value={{ openMenu, setOpenMenu }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
