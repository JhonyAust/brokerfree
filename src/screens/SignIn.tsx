// src/screens/SignIn.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '../store/rootReducer';
import { signInStart, signInSuccess, signInFailure } from '../features/userSlice';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';

type SignInNavigationProp = StackNavigationProp<RootStackParamList, 'SignIn'>;

const SignIn: React.FC = () => {
  const [formData, setFormData] = useState<{ email: string; password: string }>({ email: '', password: '' });
  const dispatch = useDispatch();
  const navigation = useNavigation<SignInNavigationProp>();
  const { loading, error } = useSelector((state: RootState) => state.user);

  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    dispatch(signInStart());
    
    try {
      const res = await fetch('http://10.0.2.2:3000/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (!res.ok) {
        throw new Error('Network response was not ok.');
      }
      
      const data = await res.json();
  
      if (data.token) {
        dispatch(signInSuccess(data));
        navigation.navigate('MainTabs', { screen: 'Home' });
      } else {
        dispatch(signInFailure(data.message || 'Unknown error'));
      }
    } catch (error) {
      const message = (error as Error).message || 'An unknown error occurred';
      dispatch(signInFailure(message));
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome! Please Login to continue.</Text>
      <TextInput
        placeholder="Email"
        onChangeText={(text) => handleChange('email', text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => handleChange('password', text)}
        style={styles.input}
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.signInButton}>
        <Text style={styles.signInButtonText}>{loading ? 'Loading...' : 'Sign In'}</Text>
      </TouchableOpacity>
      {error && <Text style={styles.error}>{error}</Text>}

      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>New member? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={[styles.registerText, styles.registerLink]}>Register here.</Text>
        </TouchableOpacity>
      </View>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 12,
  },
  signInButton: {
    backgroundColor: '#FD3752',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 16,
    width: '80%',
    alignItems: 'center',
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
  registerContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  registerText: {
    fontSize: 16,
    color: '#197f76',
  },
  registerLink: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});

export default SignIn;
