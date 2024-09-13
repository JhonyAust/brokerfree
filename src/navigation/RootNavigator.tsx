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
import HomeServices from '../screens/HomeServices';
import PaintServices from '../screens/PaintServices';
import AddressSchedule from '../screens/GetEstimate/AddressSchedule';
import ShareDetails from '../screens/GetEstimate/ShareDetails';
import PaintWallServices from '../screens/PaintWallServices/PaintWallServices';
import ShippingDetails from '../screens/PaintWallServices/ShippingDetails';
import MyPaintCart from '../screens/PaintWallServices/MyPaintCart';
import PaintWallConfirmation from '../screens/PaintWallServices/PaintWallConfirmation';

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
        <Stack.Screen name="AddressSchedule" component={AddressSchedule} />
        <Stack.Screen name="ShareDetails" component={ShareDetails} />
        <Stack.Screen name="ShippingDetails" component={ShippingDetails} />
        <Stack.Screen name="Types" component={Types} />
        <Stack.Screen name="UploadImages" component={UploadImages} />
        <Stack.Screen name="ListingConfirmation" component={ListingConfirmation} />
        <Stack.Screen name="PaintWallConfirmation" component={PaintWallConfirmation} />
        <Stack.Screen name="Services" component={HomeServices} />
        <Stack.Screen name="PaintServices" component={PaintServices} />
        <Stack.Screen name="PaintWallServices" component={PaintWallServices} />
        <Stack.Screen name="MyPaintCart" component={MyPaintCart} />
        </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
