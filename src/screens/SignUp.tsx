// src/screens/SignUp.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '../store/rootReducer';
import { signUpStart, signUpSuccess, signUpFailure } from '../features/userSlice';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';

type SignUpNavigationProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<{ username: string; email: string; password: string }>({ username: '', email: '', password: '' });
  const dispatch = useDispatch();
  const navigation = useNavigation<SignUpNavigationProp>();
  const { loading, error } = useSelector((state: RootState) => state.user);

  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    dispatch(signUpStart());
    try {
      const res = await fetch('http://10.0.2.2:3000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        dispatch(signUpSuccess(data));
        navigation.navigate('SignIn');
      } else {
        dispatch(signUpFailure(data.message || 'Unknown error'));
      }
    } catch (error) {
      const message = (error as Error).message || 'An unknown error occurred';
      dispatch(signUpFailure(message));
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create your Account</Text>
      <TextInput
        placeholder="Username"
        onChangeText={(text) => handleChange('username', text)}
        style={styles.input}
      />
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
      <TouchableOpacity onPress={handleSubmit} style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>{loading ? 'Loading...' : 'Sign Up'}</Text>
      </TouchableOpacity>
      {error && <Text style={styles.error}>{error}</Text>}

      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={[styles.registerText, styles.registerLink]}>Login here.</Text>
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
  signUpButton: {
    backgroundColor: '#FD3752',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 16,
    width: '100%',
    alignItems: 'center',
  },
  signUpButtonText: {
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

export default SignUp;
