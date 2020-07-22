import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StoreProvider } from '../contexts/StoreContext';
import AppRoutes from './App.routes';

const Navigation = () => (
  <NavigationContainer>
    <StoreProvider>
      <AppRoutes />
    </StoreProvider>
  </NavigationContainer>
);

export default Navigation;
