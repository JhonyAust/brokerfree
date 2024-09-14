import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import ServiceComponent from './Services';
import { RootState } from '../../store/rootReducer';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';
import MenuComponent from './MenuComponent';
type CustomDrawerNavigationProp = StackNavigationProp<RootStackParamList>;
const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  const navigation =  useNavigation<CustomDrawerNavigationProp>();
  // Access user info from Redux
  const { currentUser } = useSelector((state: RootState) => state.user);
  const handleAvatarPress = () => {
    navigation.navigate('Profile'); // Replace 'Profile' with the actual route name if different
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Red section */}
      <View style={styles.redSection}>
        {currentUser ? (
          <>
            <TouchableOpacity onPress={handleAvatarPress}>
              <Image source={{ uri: currentUser.avatar }} style={styles.avatar} />
            </TouchableOpacity>
            {/* User Name */}
            <Text style={styles.userName}>{currentUser.username}</Text>
          </>
        ) : (
          <>
            {/* Default Avatar and login/signup */}
            <Text style={styles.greetingText}>Welcome!</Text>
            <View style={styles.authButtons}>
              <TouchableOpacity style={styles.authButton} onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.authButtonText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.authButton} onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.authButtonText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
      {/* Below the red section */}
      <ServiceComponent />
      <MenuComponent/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  redSection: {
    backgroundColor: '#FF0000',
    padding: 16,
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  userName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  greetingText: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 8,
  },
  authButtons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  authButton: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  authButtonText: {
    color: '#FF0000',
    fontSize: 14,
  },
});

export default CustomDrawerContent;
