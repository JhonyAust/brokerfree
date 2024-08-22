import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import DrawerNavigator from './DrawerNavigator';
import { RootStackParamList } from './types';
import { RootState } from '../store/rootReducer';

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
  const { currentUser } = useSelector((state: RootState) => state.user);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={currentUser ? "MainTabs" : "SignIn"}
      >
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }} 
        />
        {currentUser && (
          <Stack.Screen
            name="MainTabs"
            component={DrawerNavigator}
            options={{ headerShown: false }} 
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
