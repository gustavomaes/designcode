import React from 'react';
import HomeScreen from './screens/HomeScreen';
import { StoreProvider } from './contexts/StoreContext';

const App = () => (
  <StoreProvider>
    <HomeScreen />
  </StoreProvider>
);

export default App;
