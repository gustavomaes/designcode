import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator initialRouteName="HOME">
    <AppStack.Screen
      name="HOME"
      component={HomeScreen}
      options={{
        headerShown: false,
        header: null,
      }}
    />
  </AppStack.Navigator>
);

export default AppRoutes;
