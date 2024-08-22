import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { signOutStart, signOutSuccess, signOutFailure } from '../features/userSlice';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';
import { useNavigation } from '@react-navigation/native';

type ProfileNavigationProp = StackNavigationProp<RootStackParamList, 'Profile'>;

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<ProfileNavigationProp>(); // Hook to access navigation
  const { currentUser } = useSelector((state: RootState) => state.user);

  const handleSignOut = async () => {
    dispatch(signOutStart());
    try {
      const res = await fetch('http://10.0.2.2:3000/api/auth/signout');
      if (res.ok) {
        dispatch(signOutSuccess());
        navigation.reset({
          index: 0,
          routes: [{ name: 'SignIn' }],
        }); // Reset navigation stack and navigate to SignIn
      } else {
        const data = await res.json();
        dispatch(signOutFailure(data.message));
      }
    } catch (error) {
      dispatch(signOutFailure('An error occurred during sign-out.'));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.username}>{currentUser?.username?.toUpperCase()}</Text>
      <Text style={styles.email}>{currentUser?.email}</Text>
      <TouchableOpacity onPress={handleSignOut} style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  email: {
    fontSize: 18,
    marginBottom: 32,
  },
  logoutButton: {
    backgroundColor: '#FD3752',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Profile;
