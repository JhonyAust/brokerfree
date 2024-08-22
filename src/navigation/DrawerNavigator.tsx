// src/navigation/DrawerNavigator.tsx
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import Home from '../screens/Home';
import SignIn from '../screens/SignIn';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }} // Hide header for all drawer screens
    >
      <Drawer.Screen name="BROKERFREE" component={BottomTabNavigator} />
      <Drawer.Screen name="SignIn" component={SignIn} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
