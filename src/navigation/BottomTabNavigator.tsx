import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Search from '../screens/Search';
import Property from '../screens/Property'; // Import the Property screen
import PlusButton from '../components/PlusButton'; // Custom component for the middle button
import { TouchableOpacity } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const EmptyComponent = () => null;

const BottomTabNavigator = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
            case 'Search':
              iconName = focused ? 'search' : 'search-outline';
              break;
            case 'Property':
              iconName = 'list'; // FontAwesome icon name
              break;
            default:
              iconName = ''; // Default empty string if no match
          }

          if (route.name === 'Property') {
            return <FontAwesome name={iconName} size={size} color={color} />;
          }

          return iconName ? <Icon name={iconName} size={size} color={color} /> : null;
        },
        tabBarButton: (props) => {
          if (route.name === 'Plus') {
            return <PlusButton {...props} />;
          }
          return <TouchableOpacity {...props} />;
        },
        tabBarActiveTintColor: '#FD3752',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: 60,
        },
        headerLeft: route.name === 'Home' ? () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              style={{ marginLeft: 16 }}
            >
              <Icon name="menu" size={30} color="#000" />
            </TouchableOpacity>
          ) : undefined,
          headerTitle: route.name === 'Home' ? 'BROKERFREE' : undefined,
          headerTitleAlign: 'center',
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen 
        name="Plus" 
        component={EmptyComponent} 
        options={{ 
          tabBarButton: (props) => <PlusButton {...props} /> 
        }} 
      />
      <Tab.Screen name="Property" component={Property} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
