import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import DrawerNavigator from './DrawerNavigator';
import { RootStackParamList } from './types';
import { RootState } from '../store/rootReducer';
import Search from '../screens/Search';
import Listings from '../screens/Listings';
import Filter from '../screens/Filter';
import Address from '../screens/CreateListing/Address';
import Details from '../screens/CreateListing/Details';
import UploadImages from '../screens/CreateListing/UploadImages';
import Types from '../screens/CreateListing/Types';
import ListingConfirmation from '../screens/CreateListing/ListingConfirmation';

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
          <>
          <Stack.Screen
            name="MainTabs"
            component={DrawerNavigator}
            options={{ headerShown: false }} 
          />
          <Stack.Screen
          name="Search"
          component={Search}
        />
          <Stack.Screen
          name="Listings"
          component={Listings}
        />
        <Stack.Screen
          name="Filter"
          component={Filter}
        />
        <Stack.Screen name="Address" component={Address} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Types" component={Types} />
        <Stack.Screen name="UploadImages" component={UploadImages} />
        <Stack.Screen name="ListingConfirmation" component={ListingConfirmation} />

        </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
