import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import { StoreProvider } from '../contexts/StoreContext';
import AppRoutes from './App.routes';
import SectionScreen from '../screens/SectionScreen';
import CoursesScreen from '../screens/CoursesScreen';
import ProjectsScreen from '../screens/ProjectsScreen';

const Tab = createBottomTabNavigator();

const activeColor = '#4775f2';
const inactiveColor = '#b8bece';

const TabApp = () => (
  // <NavigationContainer>
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'ios-home';
        } else if (route.name === 'Courses') {
          iconName = 'ios-albums';
        } else if (route.name === 'Projects') {
          iconName = 'ios-folder';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: activeColor,
      inactiveTintColor: inactiveColor,
    }}
  >
    <Tab.Screen name="Home" component={AppRoutes} />
    <Tab.Screen name="Courses" component={CoursesScreen} />
    <Tab.Screen name="Projects" component={ProjectsScreen} />
  </Tab.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = () => (
  <RootStack.Navigator headerMode="none" mode="modal">
    <RootStack.Screen
      name="Home"
      component={TabApp}
      options={{ animationEnabled: true }}
    />
    <RootStack.Screen
      name="SECTIONS"
      component={SectionScreen}
      options={{ animationEnabled: true }}
    />
  </RootStack.Navigator>
);

const Navigation = () => (
  <NavigationContainer>
    <StoreProvider>
      <RootStackScreen />
    </StoreProvider>
  </NavigationContainer>
);

export default Navigation;
