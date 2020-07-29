import React, { createContext, useState } from 'react';

const StoreContext = createContext({ signed: true });

export const StoreProvider = ({ children }) => {
  const [action, setAction] = useState();
  const [name, setName] = useState();
  const [cardOpen, setCardOpen] = useState(false);

  return (
    <StoreContext.Provider
      value={{ action, setAction, name, setName, cardOpen, setCardOpen }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
